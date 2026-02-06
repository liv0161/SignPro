function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value

  if (email && password){
    localStorage.setItem("user",email);
    alert("Login successful");
  } else {
    alert("please enter email and password");
  }
}
