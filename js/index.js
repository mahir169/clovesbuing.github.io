// hiding & showing password
function showPassw() {
    var x = document.getElementById("logPassw");
    var eyeVsbl = document.getElementById("eye");
    if (x.type === "password") {
      x.type = "text";
      eyeVsbl.innerHTM = `<i class="fas fa-eye"></i>`;
    } else {
      x.type = "password";
      eyeVsbl.innerHTM = `<i class="fas fa-eye-slash"></i>`;
    }
}

// confermation for login
// script.js
const validUsername = 'user@gmail.com';
const validPassword = '2024';

document.getElementById('customer-login').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('logEmail').value;
    const password = document.getElementById('logPassw').value;
    const message = document.getElementById('logmessage');
    
    // Validate credentials
    if (username === validUsername && password === validPassword) {
        // Redirect to the home page
        window.location.href = 'href/home.html';
    }else {
        // Show error message
        message.style.display = 'block';
    }
});