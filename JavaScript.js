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
        this.button.textContent= "start";
        return this.button;
    }
    createline(){
        this.line = document.createElement("div");
        this.line.classList.add('line');
        return this.line;
    }
    lifeLineTimer(){
        this.width = this.line.offsetWidth;
        console.log(this.width);
        this.interval = setInterval(()=>{
            const currentWidth = this.line.offsetWidth;
            const percent = (this.width / 20);
            this.line.style.width = currentWidth - percent + "px";
        }, this.interval);
    }
    changeCondition(){
        if(this.button.textContent === "start"){
            this.button.textContent = "stop";
            this.lifeLineTimer();
        }else if(this.button.textContent === "stop"){
            this.button.textContent = "start";
            clearInterval(this.interval);
        }
    }
    render(){
        container.append(this.createCounter());
        container.append(this.createButton());
        container.append(this.createline());

        this.button.addEventListener("click", this.changeCondition.bind(this));

        // if (this.autoStart) {
        //     console.log("true");
        //     console.log(this.interval);
        //     this.lifeLineTimer();
        // } else{
        //     console.log("false");
        // }
    }
}
new Timer(00,45, true, 1000);
new Timer(00,45, true, 1000);
