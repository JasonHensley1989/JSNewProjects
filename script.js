let number = document.getElementById("number-change");
let resetBtn = document.getElementById("reset");
let clock = document.getElementById("clock");
let startClockBtn = document.getElementById("startClock");
let resetClock = document.getElementById("resetClock");


let clickCount = 0;



const resetCount = () => {
    clickCount = 0;
    number.innerHTML = 0;
    console.log("Reset Button Clicked")
}

const currentCount = () =>  {   
    clickCount += 1;
    number.innerHTML = clickCount;
    console.log(clickCount)
    console.log("Hi, youve clicked the counter")
}

// clock functions



const startClockCount = () => {   
    for(let i = 0; i < 60; i++) {
        let clockCount = 0;
        display = setInterval(changeClock, 1000)
        clock.innerHTML = clockCount;
        console.log(clockCount)
    }
  
    
}

const resetClockCount = () => {
    clockCount = 0;
    if(clockCount < 0) {
        let newClockCount = 0;
        clock.innerHTML = newClockCount;
    }
}
const changeClock = () => {
    clockCount++;    
}






number.addEventListener("click", currentCount);
resetBtn.addEventListener("click", resetCount);
startClockBtn.addEventListener("click", startClockCount);
resetClock.addEventListener("click", resetClockCount);

