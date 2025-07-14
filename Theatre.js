class Theatre {
    constructor(id, name, location, screens = []) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.screens = screens;
    }
}

module.exports = Theatre;
