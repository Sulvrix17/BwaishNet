function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let error1 = document.getElementById("error1");
    error1.style.display = "none";
    if (username == "" || password == "") {
        error1.style.display = "block";
    }
    else {
        window.location.href = 'login.html';
    }
}
//////////////////////////////////////
function status() {
    window.location.href = 'status.html';
}
//////////////////////////////////////
function logout() {
    window.location.href = 'logout.html';
}
//////////////////////////////////////
function index() {
    window.location.href = 'index.html';
}
//////////////////////////////////////
// Get the button:
let mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}