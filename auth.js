function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || {};
}
function saveUsers(users){
  localStorage.setItem("users",JSON.stringify(users));
}
function validEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validPassword(password){
  return password.length >=8 &&
    /\d/.test(password) &&
    /[A-Z]/.test(passowrd);
}
function register() {
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  if (!validEmail(email)) return alert("Invalid email.Please try again.");
  if(!validPassword(password)) return alert("Weak password.Please try again.");
  const users = getUsers();
  if (users [email]) return alert("User already exists");
  users [email] = password;
  saveUsers(users);
  alert("Account created");
}
function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  const users = getUsers();
  if (!users[email]) return alert("No account found with this email. Pease try again.");
  if (users[email] === password) {
  localStorage.setItem("currentUser", email);
  window.location.href = "course.html";
  }
}
