const users = {
    "Chief": "Password123",
    "Supervisor": "Admin2026",
    "Employee01": "Welcome1"
};

function login(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("user", username);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password.");
    }
}
