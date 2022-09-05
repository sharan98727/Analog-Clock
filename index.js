
let timer = 1000
let presentDate = new Date(),
    hours = presentDate.getHours(),
    minutes = presentDate.getMinutes(),
    seconds = presentDate.getSeconds();
let interval

function setUserEnteredTime(){
    if((hoursInput.value > 0 && hoursInput.value <= 23) && (minutesInput.value>=0 && minutesInput.value<=60)){
        hours = parseInt(hoursInput.value)
        minutes = parseInt(minutesInput.value)
        seconds = 0
        clearTimeInterval()
        setIntervals()
        setClock(hours, minutes, seconds)
    } else {
        alert('Please enter a valid time')
        hoursInput.value = ''
        minutesInput.value = ''
    }
}

function setHoursMinutesAngle(minutesHandAngle, hoursHandAngle){
    let angleDifference
    if(Math.abs(minutesHandAngle - hoursHandAngle) > 360){
        angleDifference = Math.abs(minutesHandAngle - hoursHandAngle) -360
    } else {
        angleDifference = Math.abs(minutesHandAngle - hoursHandAngle)
    }
    HMangle.innerText = angleDifference
    console.log(angleDifference)
    return angleDifference
}

function setClock(hours, minutes, seconds){
    const hoursHandAngle = 30*hours + minutes/2,
        minutesHandAngle = 6*minutes,
        secondsHandAngle = 6*seconds;
    setHoursMinutesAngle(minutesHandAngle, hoursHandAngle)
    hoursHand.style.transform = `rotate(${hoursHandAngle}deg)`;
    minutesHand.style.transform = `rotate(${minutesHandAngle}deg)`;
    secondsHand.style.transform = `rotate(${secondsHandAngle}deg)`;
    console.log([hoursHandAngle, minutesHandAngle, secondsHandAngle])
    return [hoursHandAngle, minutesHandAngle, secondsHandAngle]
}

function clearTimeInterval(){
    clearInterval(interval)
}

function setIntervals(){
    interval = setInterval(() => {
        seconds+=1
        if(seconds > 60){
            seconds = 0
            minutes = minutes + 1
            if(minutes > 60){
                minutes = 0
                hours = hours + 1
                if(hours >12){
                    hours = 1
                }
            }
        }
        setClock(hours, minutes, seconds)
    },timer)
}

(() => {
    setIntervals()
    setClock(hours, minutes, seconds)
})()

setClockTime.addEventListener('click', setUserEnteredTime)