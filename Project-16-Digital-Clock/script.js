function updateClock(){
    let nowTimeIs = new Date();
    let hours = nowTimeIs.getHours();
    let minutes = nowTimeIs.getMinutes();
    let seconds = nowTimeIs.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const hoursElement = document.getElementById("_hours");
    const minutesElement = document.getElementById("_minutes");
    const secondsElement = document.getElementById("_seconds");

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

setInterval(updateClock,1000);
