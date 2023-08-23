const displayT = document.getElementById("displayTime");
const displayS = document.getElementById("displayStopwatch");

const stopWatchTemp = document.getElementById("stopWatch");
const timeTemp = document.getElementById("timer");

const btnStart = document.getElementById("start");
const btnBreak = document.getElementById("break");

let intervalId;
let isRunning = false;
let seconds = 0;
let minutes = 0;

let secondsTime = 0;
let minutesTime = 0;

let limitMinutes = 60;

const updateTime = () => {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= limitMinutes) {
    clearInterval(intervalId);
    isRunning = false;
  }

  displayS.textContent =
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;
};

const downgradeTime = () => {
  secondsTime--;
  
  if (secondsTime <= 0) {
    secondsTime = 59;
    minutesTime--;
  }

  if (minutesTime < 0) {
    clearInterval(intervalId);
    isRunning = false;
    secondsTime = 0;
    minutesTime = 0;
  }

  displayT.textContent =
    (minutesTime < 10 ? "0" : "") +
    minutesTime +
    ":" +
    (secondsTime < 10 ? "0" : "") +
    secondsTime;

};

const startTime = () => {
  if (stopWatchTemp.value) {
    limitMinutes = stopWatchTemp.value;
    stopWatchTemp.value = "";
    minutes = 0
    seconds = 0;
  }
  if (downgradeTime) {
    clearInterval(intervalId);
    isRunning = false;
  }
  if (!isRunning) {
    intervalId = setInterval(updateTime, 1000);
    isRunning = true;
  };
};

const timerTemp = () => {
  breakTime();
  intervalId = setInterval(downgradeTime, 1000);

  if (timeTemp.value) {
    breakTime()
    intervalId = setInterval(downgradeTime, 1000);
    minutesTime = timeTemp.value;
    timeTemp.value = "";
    secondsTime = 0;
    isRunning = true;
    displayT.textContent =
      (minutesTime < 10 ? "0" : "") +
      minutesTime +
      ":" +
      (secondsTime < 10 ? "0" : "") +
      secondsTime;
  };

  if(timeTemp > 10){
    secondsTime = timeTemp.value;
  }
  
  if(timeTemp === 0){
    alert("Fim")
  }
};

const breakTime = () => {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
  if (downgradeTime) {
    clearInterval(intervalId);
    isRunning = false;
  }
};

const resetTime = () => {
  clearInterval(intervalId);
  seconds = 0;
  minutes = 0;
  if (startTime) {
    isRunning = false;
  }
  displayS.textContent = "";
  displayT.textContent = "";

  if (downgradeTime) {
    clearInterval(intervalId);
    isRunning = false;
  }
};

// const showOverlay = () => {
//   if(limitMinutes == true){
//    alert('helo')
//   }
// }

