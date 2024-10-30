
class Admin extends User {
    editData() {
        return `Admin ${this.name} is editing website data.`;
    }
}

let currentAdmin;


function createAdmin() {
    const name = prompt("Enter admin name:");
    const email = prompt("Enter admin email:");
    currentAdmin = new Admin(name, email);
    document.getElementById("output").innerText = `Admin ${name} created.`;
}

function editAdminData() {
    if (!currentAdmin) return alert("Create an admin first!");
    document.getElementById("output").innerText = currentAdmin.editData();
}
