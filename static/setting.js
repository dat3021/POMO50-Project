let settingBoard = document.getElementById("settingBoard");
let settingBtn = document.getElementById("settingBtn");
var span = document.getElementsByClassName("close")[0];
let savesettings = document.getElementById("saveSettings");


span.onclick = function() {
    
    settingBoard.style.display = "none";
}

savesettings.addEventListener("click", function(){
    settingBoard.style.display = "none"
})

settingBtn.addEventListener("click", function(){
    pomoDuration.value = currentSetTime/60;
    shortBreak.value = restTime;
    longBreak.value = longrestTime;
    settingBoard.style.display = "block"
})

window.onclick = function(event) {
    if (event.target == settingBoard) {
        settingBoard.style.display = "none";
    }
};

window.onload = function() {
    fetch("/get_settings")
    .then(response => response.json())
    .then(data => {
        pomoTime = data.pomo_time;
        restTime = data.rest_time;
        longrestTime = data.longrest_time;
        currentSetTime = pomoTime * 60;
        currentTime = currentSetTime;
        clock.textContent = display_time(currentTime);
        
    });
}

