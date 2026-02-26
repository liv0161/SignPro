function checkSession() {
  if (!localStorage.getItem("currentUser")){
    window.location.href = "index.html";
  }
}
function logout(){
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

function updteStreak(){
  const today = new Date().toDateString();
  const last = localStorage.getItem("lastActive");
  let streak = Number(localStorage.getItem("streak")) || 0;

  if (last!== today){
    streak++;
    localStorage.setItem("streak",streak);
    localStorage.setItem("lastActive",today);
  }
}
