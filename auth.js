function getUsers() {
 return JSON.parse(localStorage.getItem("users")) || {};
}
function register() {
 const email = emailInput();
 const password = passwordInput();
 const users = getUsers();
 if (users[email]) return alert("User already exists");
 users[email] = password;
 localStorage.setItem("users", JSON.stringify(users));
 alert("Account created");
}
function login() {
 const email = emailInput();
 const password = passwordInput();
 const users = getUsers();
 if (users[email] === password) {
   localStorage.setItem("currentUser", email);
   window.location.href = "course.html";
 } else {
   alert("Invalid login");
 }
}
function emailInput() {
 return document.getElementById("email").value;
}
function passwordInput() {
 return document.getElementById("password").value;
}
