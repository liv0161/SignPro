const score = localStorage.getItem("score") || 0;
document.getElementById("progressText").innerText= 
  "You quiz score: " + score;
