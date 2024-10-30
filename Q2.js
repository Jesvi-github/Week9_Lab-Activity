
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        return `User ${this.name} and email ${this.email}.`;
    }
}

let currentUser;

// Button functions
function createUser() {
    const name = prompt("Enter user name:");
    const email = prompt("Enter user email:");
    currentUser = new User(name, email);
    document.getElementById("output").innerText = `User ${name} created.`;
}

function viewUserData() {
    if (!currentUser) return alert("Create a user first!");
    document.getElementById("output").innerText = currentUser.viewData();
}
