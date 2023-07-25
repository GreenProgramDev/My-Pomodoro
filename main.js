const timerDisplay = document.getElementById('time')
let interval;
let seconds = -1;
let isBreakTime = false;

const startTime =  () => {
    if(!interval){
        interval = setInterval(updateTime, 1000)
        
    }
}

const breakTime = () => {
    isBreakTime = !isBreakTime
}

const stopTime = () => {
    clearInterval(interval)
    timerDisplay.textContent = '00:00'

}

const updateTime = () => {
    if(!isBreakTime){
        seconds++;
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;    
    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`; 
};


// const descendingTime = () => {
//     const timerInput = document.getElementById('time');

//     timerDisplay.textContent = 

//     seconds--
//     const inputMinutes = document.getElementById();
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;    
//     timerDisplay.textContent = `${minutes.toString().padStart(2, 0)}:${remainingSeconds.toString().padStart(2, "0")}`

// };