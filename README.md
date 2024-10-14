# POMO50 - Pomodoro Timer Project

## Mục Lục
- [Giới thiệu](#giới-thiệu)
- [Các Tính Năng](#các-tính-năng)
- [Công Nghệ Sử Dụng](#công-nghệ-sử-dụng)
- [Cài Đặt và Chạy Dự Án](#cài-đặt-và-chạy-dự-án)
- [Cấu Trúc Thư Mục](#cấu-trúc-thư-mục)
- [Cách Sử Dụng](#cách-sử-dụng)
- [Đóng Góp](#đóng-góp)
- [Liên Hệ](#liên-hệ)

## Giới thiệu
POMO50 là một ứng dụng web dựa trên kỹ thuật Pomodoro để giúp người dùng quản lý thời gian học tập hoặc làm việc một cách hiệu quả hơn. Người dùng có thể đăng nhập, đặt thời gian Pomodoro, theo dõi thời gian làm việc và lưu trữ lịch sử sử dụng.

## Các Tính Năng
- **Quản lý tài khoản người dùng**: Đăng ký, đăng nhập và đăng xuất.
- **Hẹn giờ Pomodoro**: Người dùng có thể đặt bộ đếm ngược cho các phiên làm việc và nghỉ ngơi.
- **Theo dõi lịch sử sử dụng**: Ứng dụng lưu trữ thời gian làm việc của người dùng theo từng ngày, giúp theo dõi hiệu quả.
- **Tự động lưu dữ liệu**: Các phiên Pomodoro và lịch sử được lưu trữ trong cơ sở dữ liệu ngay cả khi người dùng đăng xuất.
- **Báo cáo tiến độ**: Hiển thị số giờ làm việc theo từng ngày khi người dùng đăng nhập lại.

## Công Nghệ Sử Dụng
Dự án này được phát triển với các công nghệ sau:
- **HTML/CSS/JavaScript**: Tạo giao diện người dùng thân thiện.
- **Python & Flask**: Xây dựng backend và xử lý logic cho ứng dụng.
- **SQL**: Quản lý cơ sở dữ liệu lưu trữ thông tin người dùng và lịch sử Pomodoro.
- **VS Code**: Môi trường phát triển chính.
- **Heroku**: (Tùy chọn) Deploy ứng dụng lên môi trường sản xuất.

## Cài Đặt và Chạy Dự Án

### Yêu Cầu
- Python 3.x
- SQLite hoặc một hệ quản trị cơ sở dữ liệu khác
- Flask

### Hướng Dẫn Cài Đặt

1. Clone dự án từ GitHub:

    ```bash
    git clone https://github.com/dat3021/POMO50-Project.git
    ```

2. Cài đặt các gói phụ thuộc:

    ```bash
    pip install -r requirements.txt
    ```

3. Khởi tạo cơ sở dữ liệu:

    ```bash
    python init_db.py
    ```

4. Chạy ứng dụng Flask:

    ```bash
    flask run
    ```

5. Truy cập ứng dụng tại địa chỉ `http://127.0.0.1:5000/`.

## Cấu Trúc Thư Mục

```bash
POMO50-Project/
│
├── static/           # Thư mục chứa file tĩnh (CSS, JavaScript, hình ảnh)
├── templates/        # Thư mục chứa các file HTML
├── app.py            # File chính của ứng dụng Flask
├── init_db.py        # File khởi tạo cơ sở dữ liệu
├── models.py         # Định nghĩa các mô hình cơ sở dữ liệu
├── requirements.txt  # Danh sách các gói cần thiết
├── README.md         # Hướng dẫn sử dụng dự án
└── .gitignore        # File cấu hình để bỏ qua các tệp không cần thiết khi commit
