function Remote(code) {
    this.code = code;
    this.volumeControlUp = function (tivi) {
        tivi.volume++;
    };

    this.volumeControlDown = function (tivi) {
        tivi.volume--;
    };

    this.channelControl = function (tivi, channel) {
        tivi.channel = channel;
    };

    this.turnOnTivi = function (tivi) {
        tivi.status = true;
    };

    this.turnOffTivi = function (tivi) {
        tivi.status = false;
    }
};


function Tivi(status, channel, volume) {
    this.status = status;
    this.channel = channel;
    this.volume = volume;
    this.getChannel = function () {
        if (this.status == true) {
            return this.channel;
        } else {
            alert("TV dang tat");
        }
    };

    this.getVolume = function () {
        if (this.status == true) {
            return this.volume;
        } else {
            alert("TV dang tat")
        }
    };

    this.getStatus = function () {
        if (this.status == true) {
            alert("TV dang bat");
        } else {
            alert("TV dang tat");
        }
    };

    this.turnOn = function () {
        this.status = true;
    };

    this.turnOff = function () {
        this.status = false;
    };

    this.channelControl = function (channel) {
        this.channel = channel;
    };

    this.volumeUp = function () {
        this.volume++;
    };

    this.volumeDown = function () {
        this.volume--;
    }
};