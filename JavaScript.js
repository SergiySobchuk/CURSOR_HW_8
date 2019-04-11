const container = document.getElementById("container");

class Timer {
    constructor(countdownMin,countdownSec, autoStart, interval){
        this.countdownMin = countdownMin;
        this.countdownSec = countdownSec;
        this.autoStart = autoStart;
        this.interval = interval;
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
        console.log("--this.width: ", this.width);
        this.progres = setInterval(()=>{
            const currentWidth = this.line.offsetWidth;
            console.log("currentWidth:", currentWidth);
            console.log("percent:", this.percent);
            this.line.style.width = currentWidth - this.percent + "px";
        }, this.interval);
    }
    changeCondition(){
        if(this.button.textContent === "start"){
            this.button.textContent = "stop";
            this.lifeLineTimer();
        }else if(this.button.textContent === "stop"){
            this.button.textContent = "start";
            clearInterval(this.progres);
        }
    }
    render(){
        container.append(this.createCounter());
        container.append(this.createButton());
        container.append(this.createline());
        this.width = this.line.offsetWidth;
        this.percent = (this.width / 20);
        this.changeCondition();
            this.button.addEventListener("click", this.changeCondition.bind(this));
    }
}
new Timer(00,45, false, 1000);
new Timer(00,45, true, 500);
