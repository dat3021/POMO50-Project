let pomoTime = 25;
let restTime = 5;
let longrestTime = 15;
let currentSetTime = pomoTime*60;
let currentTime = pomoTime*60;
let pomodoro_active = true;

let pomoDuration = document.getElementById("pomoDuration");
let shortBreak = document.getElementById("shortBreak");
let longBreak = document.getElementById("longBreak");
let saveSettings = document.getElementById("saveSettings");

let startPomo = document.getElementById("startBtn");    
let clock = document.getElementById("numPomo");
let skipBtn = document.getElementById("skipBtn");
let restBtn = document.getElementById("restBtn");
let pomoBtn = document.getElementById("pomoBtn");
let longrestBtn = document.getElementById("longrestBtn");
let running = false;
let intervalId;

let click_sound = new Audio('/static/sound/click.mp3');
let ting_sound = new Audio('/static/sound/bike.mp3');
click_sound.volume = 0.4;
ting_sound.volume = 0.4;


function display_time(seccond){
    let minute = Math.floor(seccond / 60);
    let seccondLeft = seccond % 60;
    return `${minute.toString().padStart(2, '0')}:${seccondLeft.toString().padStart(2, '0')}`
}

function log_time(duration){
    fetch("/logtime",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ duration: duration }) // Thời gian được gửi lên server
    })
    .then(respone => respone.json())
    .then(data => {console.log(data.message)})
    .catch(error => console.error("error", error))
}

function update(){
        currentTime--;
        clock.textContent = display_time(currentTime);
        if (currentTime == 0 && pomodoro_active){
            ting_sound.play();
            ting_sound.play();
            log_time(currentSetTime);
            clearInterval(intervalId);
            currentTime = currentSetTime
            clock.textContent = display_time(currentTime);
            start_count();
        }
}

function start_count(){
    if(!running){
        running = true;
        intervalId = setInterval(update, 1000);
        startPomo.textContent = "Stop";
        restBtn.style.display = "none";
        longrestBtn.style.display = "none";
        pomoBtn.style.display = "none";
        settingBtn.style.visibility = "hidden";
        skipBtn.style.visibility = "visible";
    }
    else{
        startPomo.textContent = "Start"
        settingBtn.style.visibility = "visible";
        restBtn.style.display = "block";
        longrestBtn.style.display = "block";
        pomoBtn.style.display = "block";
        skipBtn.style.visibility = "hidden";
        running = false;
        clearInterval(intervalId) 
    }
   
}

function start_rest() {
    clearInterval(intervalId); 
    currentTime = restTime * 60; 
    currentSetTime = restTime * 60;
    pomodoro_active = false;
    clock.textContent = display_time(currentTime);
}

function start_longrest() {
    clearInterval(intervalId); 
    currentTime = longrestTime * 60; 
    currentSetTime = longrestTime * 60; 
    pomodoro_active = false;
    clock.textContent = display_time(currentTime);
}

function start_pomo() {
    clearInterval(intervalId); 
    currentTime = pomoTime * 60; 
    currentSetTime = pomoTime * 60;
    pomodoro_active = true;
    clock.textContent = display_time(currentTime);
}

function clear() {
    if (pomodoro_active){
        log_time(currentSetTime - currentTime);
    }
    running = false;
    clearInterval(intervalId);
    currentTime = currentSetTime;
    clock.textContent = display_time(currentSetTime);
}

function set_time() {
    pomoTime = parseInt(pomoDuration.value);
    restTime = parseInt(shortBreak.value);
    longrestTime = parseInt(longBreak.value);

    if (isNaN(pomoTime) || pomoTime < 1 || pomoTime > 99) {
        alert("Pomodoro duration must be between 1 and 99 minutes.");
        return;
    }
    if (isNaN(restTime) || restTime < 1 || restTime > 99) {
        alert("Short break must be between 1 and 99 minutes.");
        return;
    }
    if (isNaN(longrestTime) || longrestTime < 1 || longrestTime > 99) {
        alert("Long break must be between 1 and 99 minutes.");
        return;
    }

    currentSetTime = pomoTime * 60;
    currentTime = currentSetTime;
    clock.textContent = display_time(currentTime);

    fetch("/save_settings", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pomo_time: pomoTime,
            rest_time: restTime,
            longrest_time: longrestTime
        })
    }) 
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error("Error:", error);  
    });
}

window.onbeforeunload = function() {
    clear(); 
};

saveSettings.addEventListener('click', function() {
    set_time();  
    settingBoard.style.display = "none";  
});


startPomo.addEventListener('click', function() {start_count(); click_sound.play();});
restBtn.addEventListener('click', function() { clear(); start_rest();});
pomoBtn.addEventListener('click', function() { clear(); start_pomo();});
longrestBtn.addEventListener('click', function() { clear(); start_longrest();});
skipBtn.addEventListener('click',function() {start_count(); clear();});

