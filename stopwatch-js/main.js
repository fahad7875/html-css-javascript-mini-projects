//selecting all necessary dom element

const timer = document.querySelector(".timer p");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// variable declaration

let miliSecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let int = null;

// all function here

function startTimer() {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(done, 10);
}

function stopTimer() {
  clearInterval(int);
}

function resetTimer() {
  clearInterval(int);
  miliSecond = 0;
  second = 0;
  minute = 0;
  hour = 0;
  timer.innerHTML = `00 : 00 : 00 : 00`;
}

function done() {
  miliSecond++;

  if (miliSecond == 100) {
    miliSecond = 0;
    second++;

    if (second == 60) {
      second = 0;
      minute++;

      if (minute == 60) {
        minute = 0;
        hour++;
      }
    }
  }

  let hr = hour < 10 ? "0" + hour : hour;
  let min = minute < 10 ? "0" + minute : minute;
  let sec = second < 10 ? "0" + second : second;
  let miliSec = miliSecond < 10 ? "0" + miliSecond : miliSecond;

  timer.innerHTML = `${hr} : ${min} : ${sec} : ${miliSec}`;
}

// event handler

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// stylish event handeler

startButton.addEventListener("mousedown", () => {
  startButton.classList.add("scaling");
});
startButton.addEventListener("mouseup", () => {
  startButton.classList.remove("scaling");
});

stopButton.addEventListener("mousedown", () => {
  stopButton.classList.add("scaling");
});
stopButton.addEventListener("mouseup", () => {
  stopButton.classList.remove("scaling");
});

resetButton.addEventListener("mousedown", () => {
  resetButton.classList.add("scaling");
});
resetButton.addEventListener("mouseup", () => {
  resetButton.classList.remove("scaling");
});

// good luck 