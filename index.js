const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds')

let second=0,minute=0,hour=0,intervalId;


const startStopWatch = () => {
    intervalId = setInterval(() => {
        if(second<59){
            second++;
        }
        else if(minute>=59){
            hour++;
            minute=0;
            
        }
        else{
            minute++;
            second=0;
            
        }

        let seconds = second.toString().padStart(2,"0");
        let minutes = minute.toString().padStart(2,"0");
        let hours =   hour.toString().padStart(2,"0");
        
        hoursElement.innerText = hours;
        minutesElement.innerText = minutes;
        secondsElement.innerText = seconds;


    }, 1000);
}


const stopStopWatch = () => {
    clearInterval(intervalId);
}


const resetStopWatch = () => {
    stopStopWatch();
    intervalId = null;
    second=0;
    const reset = "00";
    hoursElement.innerText = reset;
    minutesElement.innerText = reset;
    secondsElement.innerText = reset;


}