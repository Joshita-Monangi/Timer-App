let timer;
let timeLeft = 25 * 60;
let isRunning = false;

const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const alertSound = document.getElementById('alert');

window.startTimer = () => {
    if (!isRunning && timeLeft > 0) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alertSound.play();
            }
        }, 1000);
    }
};

window.stopTimer = () => {
    clearInterval(timer);
    isRunning = false;
};

window.resetTimer = () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay();
};

window.setTimer = (seconds) => {
    timeLeft = seconds;
    updateDisplay();
};

const updateDisplay = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    hoursDisplay.textContent = String(hours).padStart(2, '0');
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
};

updateDisplay();
