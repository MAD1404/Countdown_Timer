const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');
const newYear = document.getElementById('newY');

const newYearE1 ='1 Jan 2025';

newYear.innerHTML = newYearE1;

let countdown = () => {
    const newYearDate = new Date (newYearE1)
    const currentDate = new Date();
    
    const totalSeconds = (newYearDate - currentDate)/1000

    const Days = Math.floor(totalSeconds/3600/24)
    const Hours = Math.floor(totalSeconds/3600%24)
    const Minutes = Math.floor(totalSeconds/60)%60
    const Seconds = Math.floor(totalSeconds%60)
    
    daysE1.innerHTML = Days;
    hoursE1.innerHTML = formatTime(Hours);
    minsE1.innerHTML = formatTime(Minutes);
    secondsE1.innerHTML = formatTime(Seconds);

}
const formatTime = (time) =>{
    return time <10 ? `0${time}`: time
}

countdown();
setInterval(countdown ,1000);
