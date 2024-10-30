
function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}


Player.prototype.gainXp = function (xp) {
    if (xp < 1 || xp > 10) {
        console.log("XP should be between 1 and 10.");
        return;
    }
    this.points += xp;
    while (this.points >= 10) {
        this.points -= 10;
        this.lvl += 1;
    }
};


Player.prototype.describe = function () {
    return `Name: ${this.name}, Level: ${this.lvl}, Points: ${this.points}`;
};

let currentPlayer;

// Button functions
function createPlayer() {
    const playerName = prompt("Enter player name:");
    currentPlayer = new Player(playerName);
    document.getElementById("output").innerText = `Player ${playerName} created.`;
}

function gainExperience() {
    if (!currentPlayer) return alert("Create a player first!");
    const xp = parseInt(prompt("Enter XP to gain (1-10):"), 10);
    currentPlayer.gainXp(xp);
    document.getElementById("output").innerText = `Player ${currentPlayer.name} gained ${xp} XP.`;
}

function describePlayer() {
    if (!currentPlayer) return alert("Create a player first!");
    document.getElementById("output").innerText = currentPlayer.describe();
}
