const Screen = require("./Screen");
const Movie = require("./Movie");

class Show {
    constructor(id, screen, movie, showDate, showTime) {
        this.id = id;
        this.screen = screen;
        this.movie = movie;
        this.showDate = showDate;
        this.showTime = showTime;
    }
}

module.exports = Show;
