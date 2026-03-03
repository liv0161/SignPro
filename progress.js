document.getElementById("stats").innerText =
  `Lessons completed: ${(JSON.parse(localStorage.getItem("completedLessons"))||[]).length}
Streak: ${localStorage.getItem("streak") || 0}`;
