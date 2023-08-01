const display = document.getElementById("time");
const timeTemp = document.getElementById("temporizador");
const btnStart = document.getElementById("start");
const btnBreak = document.getElementById("break");

let intervalId;
let isRunning = false;
let seconds = 0;
let minutes = 0;
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

  display.textContent =
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;
};

const downgradeTime = () => {
  seconds--;

  if (seconds <= 0) {
    seconds = 60;
    minutes--;
  }

  if (minutes < 0) {
    clearInterval(intervalId);
    isRunning = false;
    seconds = 0;
    minutes = 0;
  }

  display.textContent =
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;
};

const startTime = () => {
  if (downgradeTime) {
    clearInterval(intervalId);
    isRunning = false;
  }
  if (!isRunning) {
    intervalId = setInterval(updateTime, 1000);
    isRunning = true;
  }
  if (timeTemp.value) {
    limitMinutes = timeTemp.value;
  }
};

const temp = () => {
  breakTime();
  intervalId = setInterval(downgradeTime, 1000);

  if (timeTemp.value) {
    breakTime()
    intervalId = setInterval(downgradeTime, 1000);
    minutes = timeTemp.value;
    seconds = 0;
    isRunning = true;
    display.textContent =
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds;
    timeTemp.value = "";
    // isRunning = true;
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
  display.textContent = "";
  if (downgradeTime) {
    clearInterval(intervalId);
    isRunning = false;
  }
};
