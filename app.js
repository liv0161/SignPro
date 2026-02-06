function checkSession() {
  const user = localStorage.getItem("currentUser);
  if (!user) {
     winndow.location.href = "index.html";
    
