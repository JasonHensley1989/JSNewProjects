let number = document.getElementById("number-change");
let resetBtn = document.getElementById("reset");
let clock = document.getElementById("clock");
let startClockBtn = document.getElementById("startClock");
let resetClock = document.getElementById("resetClock");
let textSign = document.getElementById("text");


let clickCount = 0;
let clockCount = 0;

const currentCount = () =>  {   
    clickCount += 1;
    number.innerHTML = clickCount;
    console.log(clickCount)
    console.log("Hi, youve clicked the counter")
}

const resetCount = () => {
    clickCount = 0;
    number.innerHTML = 0;
    console.log("Reset Button Clicked")
}

const startClockCount = () => {   
    for(let i = clockCount; i < clockCount + 1; i++) {
        let display = setInterval(changeClock, 1000)
        console.log(clockCount)
    }
    setTimeout(changeText, 1000);
}
const changeClock = () => {
    clockCount++;
    clock.innerHTML = clockCount;
}


const resetClockCount = () => {
    clockCount = -1;
    textSign.innerHTML = ""
    // changeText();
}

const changeText = () => {
    let textBox = "Dang";
    for(let i = 0; i < textBox.length; i++) {
        textSign.innerHTML +=  textBox[i];
        console.log(textSign)
    }
    // textSign.innerHTML = "Da"
}


number.addEventListener("click", currentCount);
resetBtn.addEventListener("click", resetCount);
startClockBtn.addEventListener("click", startClockCount);
resetClock.addEventListener("click", resetClockCount);
textSign.addEventListener("click", changeText)

