console.log("TIMER");

// separations of concerns
// data


// obtain the document DOM elements
var startBtn = document.querySelector('.start-btn');
var pauseBtn = document.querySelector('.pause-btn');
var resetBtn = document.querySelector('.reset-btn');
var display = document.querySelector('.display');

var timerId = null; //

var seconds = 0; // store your own counter

display.textContent = seconds;

var tick = function() {
    // increment the dispaly by 1
    seconds = seconds + 1;
    display.textContent = seconds;
}

var handleStart = function() {
    // guard condition - i.e. you check it up front
    if (timerId !== null) {
        return;
    }

    //startBtn.setAttribute("disabled", "true")

    // start timer so that every second it updates the display
    timerId = setInterval(function() {
        //increment the display by 1
        display.textContent = Number(display.textContent) + 1;
        //seconds = seconds + 1;
    }, 1000)

}

var handlePause = function() {
    console.log("asdsdaf");  
  
    // stop the timer;
    clearInterval(timerId);
    // reset timerid
    timerId = null;
  
}

var handleReset = function() {
    // reset the timer
    clearInterval(timerId);

    // reset timer id
    timerId = null;
    // update the display to ZERO
    display.textContent = 0;

}

startBtn.addEventListener('click', handleStart);
resetBtn.addEventListener('click', handleReset);
pauseBtn.addEventListener('click', handlePause);


// DOM API
// timer API - built in library in browser
// setTimeout(fn, 5000);
// setInterval()

// clearTimeout()
// setInterval(() => {
    
// }, interval);
// clearInterval