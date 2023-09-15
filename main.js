const displayT = document.getElementById("displayTime");
const displayS = document.getElementById("displayStopwatch");

const stopWatchTemp = document.getElementById("stopWatch");
const timeTemp = document.getElementById("timer");

const btnStart = document.getElementById("start");
const btnBreak = document.getElementById("break");
const btnStop = document.getElementById('stop')
btnStop.style.display = 'none'
const btnReturn = document.getElementById("return")
btnReturn.style.display = 'none'

const listHistoricStar = document.getElementById('historicStart')
const historicStart = []
const listHistoricTime = document.getElementById('historicTime')
const historicTime = []



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
    seconds = 0 ;
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
    
    if (minutes == limitMinutes) {
      alert("Uma pausa e retorne em seguida!")
    }
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

    if (minutesTime == 0 && secondsTime == 0) {
      alert("Volte ao que estava fazendo")
    }
};

const startTime = () => {
  if (stopWatchTemp.value) {
    limitMinutes = stopWatchTemp.value;
    minutes = 0;
    seconds = 0; 
  }
  if(stopWatchTemp.value > 0){
    if(limitMinutes < 10){
      historicStart.push("0" + limitMinutes + ":00")
    }else {
      historicStart.push(limitMinutes + ":00")
    }
    stopWatchTemp.value = ""
  }else {
    historicStart.push(displayS.textContent)
  }
  if (downgradeTime) {
    clearInterval(intervalId);
    isRunning = false;
  } 
  if (!isRunning) {
    intervalId = setInterval(updateTime, 1000);
    isRunning = true;
  }
  updateHistoricStart()
  btnStop.style.display = 'block'

  btnStart.style.display = 'none'
};

const timerTemp = () => {
  breakTime();
  intervalId = setInterval(downgradeTime, 1000);

  if (timeTemp.value) {
    breakTime();
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
  }

  if (timeTemp > 10) {
    secondsTime = timeTemp.value;
  }

  historicTime.push(displayT.textContent)
  updateHistoricTime()
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
  if(btnReturn.style.display === 'none'){
    btnBreak.style.display = 'none';
    btnReturn.style.display = 'block';
  }
  
};

const breakReturn = () => {
  
  if(btnBreak.style.display === 'none'){
    btnBreak.style.display = 'block';
    btnReturn.style.display = 'none';
  }
  
  if (!isRunning) {
    intervalId = setInterval(updateTime, 1000);
    isRunning = true;
  }
}

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
  if(btnBreak.style.display === 'none'){
    btnBreak.style.display = 'block';
    btnReturn.style.display = 'none';
  }
  btnStop.style.display = 'none'
  btnStart.style.display = 'block'


};

const updateHistoricStart = () => {
  listHistoricStar.innerHTML = "";

  historicStart.forEach(entry => {
    const newStart = document.createElement('ul')
    newStart.classList.add('itemUl')
    const newItemStart = document.createElement('li')
    newItemStart.classList.add('itemLi')
    newItemStart.textContent = entry;
    newStart.appendChild(newItemStart)
    listHistoricStar.appendChild(newStart)
  })

}

const updateHistoricTime = () => {
  listHistoricTime.innerHTML = "";

  historicTime.forEach(entry => {
    const newTime = document.createElement('li')
    newTime.textContent = entry;
    newTime.classList.add('itemLi')
    listHistoricTime.appendChild(newTime)
  })
}