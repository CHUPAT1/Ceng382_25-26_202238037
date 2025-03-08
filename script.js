// Function that stops the background and show ups the form
document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("backgroundVideo");
    let button = document.getElementById("toggleButton");

    button.addEventListener("click", function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// I took some help from ChatGpt in here. This function hides the register form when the user press 'H' from keyboard 
document.addEventListener("keydown", function(event) {
    if (event.key === "h" || event.key === "H") {
        let container = document.getElementById("registerContainer");
        container.style.display = (container.style.display === "none") ? "block" : "none";
    }
});

// I took some help from ChatGpt in here. This function hides the register form when the user clicks the css art which is located at middle of the website
document.getElementById("toggleButton").addEventListener("click", function() {
    let container = document.getElementById("registerContainer");
    container.style.display = (container.style.display === "none") ? "block" : "none";
});

// I took some help from ChatGpt in here. This function updates the clock
function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}
// I took some of these codes from Grok AI
document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Create user object
        const user = {
            nickname: username,
            password: password,
            timestamp: new Date().toISOString()
        };
        users.push(user);

        document.getElementById('username').value = '';
        document.getElementById('password').value = '';

        alert('Samurai created successfully!');

        console.log('Current users:', users);
    } else {
        alert('Please fill in both nickname and password fields!');
    }
});

// Optional: Function to get all users (for debugging purposes)
function getAllUsers() {
    return users;

}
var users = []
setInterval(updateClock, 1000);
updateClock();