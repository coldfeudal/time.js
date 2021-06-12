class Timer {
    constructor (start = false) {
        this.start();
    }
    
    start () {
        let tmptime = new Date();
        this.startTime = tmptime.getTime();
    }
    
    last () {
        let tmptime = new Date();
        if (!this.startTime) {
            console.error("Timer did not start");
            return 0;
        }
        return tmptime.getTime() - this.startTime;
    }
    
    destroy () {
        delete this.startTime;
    }
}