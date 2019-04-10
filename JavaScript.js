class Timer {
    constructor(countdownTime, autoStart, interval){
        this.countdownTime = countdownTime;
        this.autoStart = autoStart;
        this.interval = interval;
        this.timer = document.getElementById("timer_top");
        this.timerClass = document.getElementsByClassName("timer");
        this.width = this.timer.offsetWidth;
        this.but = document.getElementById("button_top");
        this.render();
    }
    render(){
        if (this.autoStart) {
            console.log("true");
            console.log(this.interval);
            this.lifeLineTimer();
        } else{
            console.log("false");
        }
    }
    lifeLineTimer(){
        console.log("timer", this.timer);
        console.log("timerClass", this.timerClass);
        console.log("offsetWidth", this.timer.offsetWidth);
        console.log("clientWidth", this.timerClass[1].clientWidth);
        this.interval = setInterval(()=>{
            const currentWidth = this.timer.offsetWidth;
            console.log("currentWidth" ,currentWidth);
            const percent = (this.width / 50);
            console.log("percent", percent);
            this.timer.style.width = currentWidth - percent + "px";
            console.log(this.timer.style.width);
            if (currentWidth - percent < 0){
                clearInterval(this.interval);
            }
            // if ()
        },this.interval);
    }
}

const TimerFirst = new Timer(45, true, 1000);
// TimerFirst.StartWork();