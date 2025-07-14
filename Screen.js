const Theatre = require("./Theatre");

class Screen {
    constructor(id, theatre, screenNumber, shows = [], seats = []) {
        this.id = id;
        this.theatre = theatre;
        this.screenNumber = screenNumber;
        this.shows = shows;
        this.seats = seats;
    }
}

module.exports = Screen;
