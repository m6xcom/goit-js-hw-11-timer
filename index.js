const daysSpan = document.querySelector("[data-value='days']");
const hoursSpan = document.querySelector("[data-value='hours']");
const minsSpan = document.querySelector("[data-value='mins']");
const secsSpan = document.querySelector("[data-value='secs']");

let targetDate = new Date("Jan 1, 2021");

class CountdownTimer {
  constructor(date) {
    this.targetDate = date;
    this.setCountdown();
  }
  setCountdown() {
    let time = this.targetDate - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    daysSpan.textContent = String(days).padStart(2, 0);
    hoursSpan.textContent = String(hours).padStart(2, 0);
    minsSpan.textContent = String(mins).padStart(2, 0);
    secsSpan.textContent = String(secs).padStart(2, 0);
  }
  updateTimer = setInterval(() => {
    this.setCountdown();
  }, 1000);
}

new CountdownTimer(targetDate);
