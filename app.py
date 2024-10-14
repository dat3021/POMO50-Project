from flask import Flask, redirect, render_template, request, session, jsonify
from flask_login import login_required
from flask_session import Session
from cs50 import SQL
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import datetime, timedelta


app = Flask(__name__)


app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

db = SQL("sqlite:///data.db")

app.jinja_env.auto_reload = True

#app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config["SEND_FILE_MAX_AGE_DEFAULT"] = 0

@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/", methods = ["GET","POST"])
def begin():
    if request.method == "POST":
        return render_template("/")
    return render_template("layout.html")



@app.route("/login", methods=["GET","POST"])
def login():

    session.clear()

    if request.method == "POST":
        name = request.form.get("username")
        password = request.form.get("password")
        if not name or not password:
            return "Something Wrong"
        
        rows =db.execute("SELECT * FROM users WHERE name = ? ", name )

        if len(rows) != 1 or not check_password_hash(rows[0]["password"], password):
            return "Something Wrong"

        session["user_id"] = rows[0]["id"]

        return redirect("/")

    return render_template("login.html")

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


@app.route("/register", methods=["GET","POST"])
def register():
    if request.method == "POST":
        name = request.form.get("username")
        password = request.form.get("password")
        repassword = request.form.get("repassword")

        if not name or not password or not repassword:
            return "Something Wrong"
        
        if password != repassword:
            return "Something Wrong"
        
        hashed = generate_password_hash(password)

        db.execute("INSERT INTO users(name, password) VALUES (?, ?)", name, hashed)

        return redirect("/login")

    return render_template("register.html")

@app.route("/logtime", methods=["POST","GET"])
def logtime():
    user_id = session["user_id"]
    if user_id:
        data = request.get_json()
        duration = data["duration"]
        current_date = datetime.now().strftime("%Y-%m-%d")
        if duration >= 60:
            db.execute("INSERT INTO time(user_id, duration, date) VALUES (?,?,?)",user_id, duration, current_date)

        return jsonify({"message": "Time logged successfully"})

@app.route("/save_settings", methods=["POST"])
def save_settings():
    if not session.get("user_id"):
        return redirect("/")
    data = request.get_json()
    
    # Lấy thông tin từ request
    pomo_time = int(data.get("pomo_time"))
    rest_time = int(data.get("rest_time"))
    longrest_time = int(data.get("longrest_time"))
    
    # Lấy user_id từ current_user (giả sử hệ thống có đăng nhập)
    user_id = int(session["user_id"])
    
    # Kiểm tra nếu user đã có cài đặt, nếu có thì cập nhật, nếu không thì tạo mới
    existing_settings = db.execute("SELECT * FROM settings WHERE user_id = ?", (user_id,))
    if existing_settings:
        db.execute("UPDATE settings SET pomo_time = ?, rest_time = ?, longrest_time = ? WHERE user_id = ?", 
                   pomo_time, rest_time, longrest_time, user_id)
    else:
        db.execute("INSERT INTO settings (user_id, pomo_time, rest_time, longrest_time) VALUES (?, ?, ?, ?)", user_id, pomo_time, rest_time, longrest_time)


    
    return jsonify({"message": "Settings saved successfully"})


@app.route("/get_settings", methods=["GET"])
def get_settings():
    if not session.get("user_id"):
        return redirect("/login")
    user_id = session["user_id"]

    settings = db.execute("SELECT * FROM settings WHERE user_id = ?", user_id)

    if settings:
        return jsonify({
            "pomo_time": settings[0]["pomo_time"],
            "rest_time": settings[0]["rest_time"],
            "longrest_time": settings[0]["longrest_time"]
        })   
    else:
        return jsonify({
            "pomo_time": 25,
            "rest_time": 5,
            "longrest_time": 20
        }) 

@app.route("/get_data", methods=["GET"])
def get_data():
    user_id = session["user_id"]
    if not user_id:
        return redirect("/")
    
    now = datetime.now()
    date = now - timedelta(days=7)
    date = date.strftime("%Y-%m-%d")

    data = db.execute("SELECT date, SUM(duration)/60 duration FROM time WHERE user_id=? and date >= ? GROUP BY date ", user_id, date)

    if data:
        result = []
        for row in data:
            result.append({
                "date": row["date"],
                "duration": row["duration"]
            })
        return jsonify(result) 
    else: 
        return jsonify({"message": "No data found"}), 404