// Constructor
class Chronometer {
    constructor (currentTime, currentMiliseconds, intervalArray, minutes, seconds, miliseconds) {
        this.currentTime = 0; 
        this.currentMiliseconds = 0;
        this.intervalArray = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.miliseconds = 0;
    }

    startClick ()  {
        let self = this;
        self.intervalArray = setInterval ( () => {
            self.setTime();
            if(self.currentMiliseconds < 99) {
                self.currentMiliseconds++;
            } else {
                self.currentMiliseconds = 0;
            }
            if(self.currentTime < 6000) {
                self.currentTime++;
            } else {
                self.currentTime = 0;
            }
        }, 10);
    };

    setMinutes () {
        let self = this;
        return self.currentTime > 5999? self.minutes = Math.floor(self.currentTime % 5999) + self.minutes: self.minutes;
    };

    setSeconds () {
        let self = this;
        return self.currentTime > 100? self.seconds = Math.floor(self.currentTime / 100): self.seconds = 0;
    };

    twoDigitsNumber (value) {
        return value > 9? "" + value: "0" + value;
    };

    setTime ()  {
        let self = this;
        self.setSeconds();
        self.setMinutes();
        self.setMilliseconds();
        let seconds = self.twoDigitsNumber(self.seconds);
        let minutes = self.twoDigitsNumber(self.minutes);
        let miliseconds = self.twoDigitsNumber(self.miliseconds)
    };

    setMilliseconds () {
        let self = this;
        return self.currentMiliseconds < 99? self.miliseconds = self.currentMiliseconds: self.miliseconds = 0;
    };

    stopClick () {
        let self = this; 
        clearInterval(self.intervalArray);
    };

    resetClick () {
        let self = this;
        self.currentTime = 0;
        self.currentMiliseconds = 0;
        clearInterval(self.intervalArray);
    };
}
// Chronometer.prototype.splitClick = function () {

// };
