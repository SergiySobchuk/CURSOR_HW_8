const container = document.getElementById("container");

class Timer {
    constructor(countdownMin,countdownSec, autoStart, lineInterval, timeInterval){
        this.countdownMin = countdownMin;
        this.countdownSec = countdownSec;
        this.autoStart = autoStart;
        this.lineInterval = lineInterval;
        this.timeInterval = timeInterval;
        this.render();
    }
    createCounter(){
        this.counter = document.createElement("div");
        this.counter.textContent = this.countdownMin+":"+this.countdownSec;
        // this.counter.textContent = `${countdownMin}:${countdownSec}`;
        this.counter.classList.add('count');
        return this.counter;
    }
    createButton(){
        this.button = document.createElement("button");
        this.button.classList.add('button');
        if (this.autoStart) {
            this.button.textContent= "start";
        } else{
            this.button.textContent= "stop";
        }
        return this.button;
    }
    createline(){
        this.line = document.createElement("div");
        this.line.classList.add('line');
        return this.line;
    }
    lifeLineTimer(){
        this.progres = setInterval(()=>{
            const currentWidth = this.line.offsetWidth;
            this.line.style.width = currentWidth - this.percent + "px";
        }, this.lineInterval);
    }
    countDown() {
        this.countDec = setInterval(() => {
            this.countdownSecDec = this.countdownSecDec - this.timeInterval/1000;
            this.counter.textContent = this.countdownMin+":"+ this.countdownSecDec;
            if (this.countdownSecDec === 0|| this.countdownSecDec < 0){
                this.counter.textContent = this.countdownMin+":"+this.countdownSec;
                this.countdownSecDec = this.countdownSec;
                this.button.textContent = "start";
                this.line.style.width = this.width+"px";
                clearInterval(this.progres);
                clearInterval(this.countDec);
            }
        }, this.timeInterval);
        return this.countDec;
    }
    changeCondition(){
        if(this.button.textContent === "start"){
            this.button.textContent = "stop";
            this.countDown();
            this.lifeLineTimer();
        }else if(this.button.textContent === "stop"){
            this.button.textContent = "start";
            clearInterval(this.countDec);
            clearInterval(this.progres);
        }
    }
    render(){
        container.append(this.createCounter());
        container.append(this.createButton());
        container.append(this.createline());
        this.width = this.line.offsetWidth;
        this.countdownSecDec = this.countdownSec;
        this.percent = (this.width / this.countdownSec / (1 / (this.lineInterval/1000)));
        this.changeCondition();
        this.button.addEventListener("click", this.changeCondition.bind(this));
    }
}
new Timer(00,10, false, 100, 1000);
new Timer(00,25, true, 1000, 2000);
