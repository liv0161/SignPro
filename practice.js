const practiceQuestions = [
  {
    type: "mcq",
    embed: "https://bslsignbank.ucl.ac.uk/dictionary/words/hello-1.html",
    correct: "Hello",
    options: ["Hello", "Thank You", "Goodbye"]
  },
  {
    type: "text",
    embed: "https://bslsignbank.ucl.ac.uk/dictionary/words/thank-you-1.html",
    correct: "thank you"
  }
];

let index = 0;
let score = 0;

const frame = document.getElementById("signFrame");
const area = document.getElementById("questionArea");
const feedback = document.getElementById("feedback");
const counter = document.getElementById("questionCounter");

function loadQuestion() {
  const q = practiceQuestions[index];

  counter.innerText = `Question ${index + 1} of ${practiceQuestions.length}`;
  frame.src = q.embed;
  feedback.innerText = "";

  if (q.type === "mcq") {
    area.innerHTML = `
      <p>Which sign is this?</p>
      ${q.options.map(opt =>
        `<label>
          <input type="radio" name="answer" value="${opt}">
          ${opt}
        </label><br>`
      ).join("")}
    `;
  } else {
    area.innerHTML = `
      <p>Type the name of this sign:</p>
      <input id="textAnswer" placeholder="Your answer">
    `;
  }
}

function submitAnswer() {
  const q = practiceQuestions[index];
  let userAnswer = "";

  if (q.type === "mcq") {
    const selected = document.querySelector("input[name='answer']:checked");
    if (!selected) {
      feedback.innerText = "Please select an answer.";
      return;
    }
    userAnswer = selected.value;
  } else {
    userAnswer = document.getElementById("textAnswer").value.trim().toLowerCase();
    if (!userAnswer) {
      feedback.innerText = "Please type an answer.";
      return;
    }
  }

  if (userAnswer === q.correct.toLowerCase()) {
    feedback.innerText = "Correct ✔";
    score++;
  } else {
    feedback.innerText = `Incorrect ✖ — correct answer: ${q.correct}`;
  }

  index++;

  if (index < practiceQuestions.length) {
    setTimeout(loadQuestion, 1200);
  } else {
    finishPractice();
  }
}

function finishPractice() {
  localStorage.setItem("quizScore", score);
  updateStreak();
  area.innerHTML = "";
  feedback.innerText = `Practice complete! Score: ${score}/${practiceQuestions.length}`;
}

loadQuestion();
