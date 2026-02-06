function register() {
  const email = emailInput();
  const password = passwordInput();

  const users = getUsers();
  if (users[email]){
    alert("Account already exists");
    return;
  }

  users[email] = password;
  localStorage.setItem("users", JSONstringify(users));
  alert("Account created");
}

function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password){
    localStorage.setItem("user",email);
    alert("Login successful");
  } else {
    alert("please enter email and password");
}
