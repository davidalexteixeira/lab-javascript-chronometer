// Constructor
function Chronometer() {
    this.currentTime = 0; 
    this.currentMiliseconds = 0;
    this.intervalArray = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.miliseconds = 0;
}

Chronometer.prototype.startClick = function () {
    var self = this;
    self.intervalArray = setInterval (function () {
        self.setTime();
        if(self.currentMiliseconds < 99) {
            self.currentMiliseconds++;
        } else {
            self.currentMiliseconds = 0;
        }
        if(self.currentTime < 6000) {
            self.currentTime++;
            console.log(self.currentTime)
        } else {
            self.currentTime = 0;
        }
    }, 10);
};

Chronometer.prototype.setMinutes = function () {
    var self = this;
    return self.currentTime > 5999? self.minutes = Math.floor(self.currentTime % 5999) + self.minutes: self.minutes;
};

Chronometer.prototype.setSeconds = function () {
    var self = this;
     return self.currentTime > 100? self.seconds = Math.floor(self.currentTime / 100): self.seconds = 0;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    return value > 9? "" + value: "0" + value;
};

Chronometer.prototype.setTime = function () {
    var self = this;
    self.setSeconds();
    self.setMinutes();
    self.setMilliseconds();
    var seconds = self.twoDigitsNumber(self.seconds);
    var minutes = self.twoDigitsNumber(self.minutes);
    var miliseconds = self.twoDigitsNumber(self.miliseconds)
};

Chronometer.prototype.setMilliseconds = function () {
    var self = this;
    return self.currentMiliseconds < 99? self.miliseconds = self.currentMiliseconds: self.miliseconds = 0;
};

Chronometer.prototype.stopClick = function () {
    var self = this; 
    clearInterval(self.intervalArray);
};

Chronometer.prototype.resetClick = function () {
    var self = this;
    self.currentTime = 0;
    self.currentMiliseconds = 0;
    clearInterval(self.intervalArray);
};

// Chronometer.prototype.splitClick = function () {

// };
