function checkSession() {
  const user = localStorage.getItem("currentUser);
  if (!user) {
     winndow.location.href = "index.html";
  }
}

function logout(){
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}
    
