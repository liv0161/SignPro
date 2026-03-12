function getUsers() {
 return JSON.parse(localStorage.getItem("users")) || {};
}
function saveUsers(users) {
 localStorage.setItem("users",JSON.stringify(users));
}
function showMessage(msg, color="black"){
 const m = document.getElementById("message");
 m.innerText = msg;
 m.style.color = color;
}

function validateEmail(email){
 const emailPattern = 
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 return emailPattern.test(email);
}
function validatePassword(password) {
 if (password.length <8) return false;
 const hasNumber = /\d/;
 const hasLetter = /[a-zA-Z]/;
 return hasNumber.test(passowrd) && hasLetter.test(password);
}

async function register() {
 const email = document.GetElementById("regEmail").value.trim();;
 const password = document.getElemntById("regPassword").value;
 if (!validateEmail(email)){
  showMessage("Invalid email format. please try again.","red");
  return;
 }
if (!validatePassword(password)){
 showMessage("Password must be at least 8 characters and contain a number. please try again", "red");
 return;
}
 const users = getUsers();
 if (users[email]) return alert("User already exists");
 users[email] = password;
 localStorage.setItem("users", JSON.stringify(users));
 alert("Account created");
}
async function login() {
 const email = document.getElementById("loginEmail").value.trim();
 const password = document.getElementById("loginPassword").value;
 const users = getUsers();
 if (!users[email]){
  showMessage("No account was found with this email- please register","red");
  return;
 }
 if (users[email] === password) {
   localStorage.setItem("currentUser", email);
  alert("Login successful");
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
