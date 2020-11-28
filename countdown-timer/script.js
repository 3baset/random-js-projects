const yearsEl = document.getElementById("years")
const monthsEl = document.getElementById("months")
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

const targetDate = new Date("7 Jul 2022 23:20:00").getTime()

function countDown(){
    let now = new Date().getTime();
    let diffr = targetDate - now;
    secondsEl.innerHTML = Math.floor(diffr % (1000*60) / 1000);
    minutesEl.innerHTML = Math.floor(diffr % (1000*60*60) / (1000*60));
    hoursEl.innerHTML = Math.floor(diffr % (1000*60*60*24) / (1000*60*60));
    daysEl.innerHTML = Math.floor(diffr % (1000*60*60*24*30) / (1000*60*60*24));
    monthsEl.innerHTML = Math.floor(diffr % (1000*60*60*24*30*12) / (1000*60*60*24*30));
    yearsEl.innerHTML = Math.floor(diffr / (1000*60*60*24*30*12));
}


countDown();
setInterval(countDown,1000)