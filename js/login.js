// ================================
// Employee Portal Login (Roleplay)
// ================================

const users = {
    "Chief": {
        password: "Chief2026",
        role: "Chief Officer"
    },
    "Supervisor": {
        password: "Supervisor2026",
        role: "Supervisor"
    },
    "Employee01": {
        password: "Welcome2026",
        role: "Employee"
    }
};

const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const error = document.getElementById("errorMessage");
const button = document.getElementById("loginButton");

form.addEventListener("submit", login);

function login(e) {

    e.preventDefault();

    error.textContent = "";

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    button.disabled = true;
    button.innerHTML = "Signing In...";

    setTimeout(() => {

        if (
            users[username] &&
            users[username].password === password
        ) {

            sessionStorage.setItem("loggedIn", "true");
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("role", users[username].role);

            localStorage.setItem("remember", "true");

            window.location.href = "verify.html";

        } else {

            error.textContent = "Invalid username or password.";

            button.disabled = false;
            button.innerHTML = "Sign In";

        }

    }, 1200);

}
