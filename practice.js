let score = 0;
function submitAnswer() {
  score ++;
  localStorage.setItem("score",score);
  document.getElementById("feedback").inneText =
    "Answer submitted! Your score is currently " + score;
}
