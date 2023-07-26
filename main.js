const display = document.getElementById("time");
const timeTemp = document.getElementById('temporizador')

let intervalId;
let isRunning = false
let seconds = -1
let minutes = 0

const updateTime = () => {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  display.textContent =
    (minutes < 10 ? "0" : '') + minutes + ":" + (seconds < 10 ? "0" : '') + seconds;
};

const startTime = () => {
    if(!isRunning){
        intervalId = setInterval(updateTime, 1000)
        isRunning = true
    }

}

const breakTime = () => {
    if(isRunning){
        clearInterval(intervalId)
        isRunning = false
    }
}

const resetTime = () => {
    clearInterval(intervalId)
    seconds = 0
    minutes = 0
    display.textContent = ''
    isRunning = false
}

const temp = () => {
    if(timeTemp.value){
        minutes = timeTemp.value
        seconds--
        display.textContent = 
        (minutes < 10 ? "0" : '') + minutes + ":" + (seconds < 10 ? "0" : '') + seconds;
        timeTemp.value = ''
    }
}