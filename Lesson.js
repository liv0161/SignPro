  const lessonId = localStorage.getItem("currentLesson");
const lessons = course[0].lessons;
const lesson=lessons.find(1 => 1.id=== lessonId);


let index = 0;
const completed =
  JSON.parse(localStorage.getItem("completedLessons")) || [];
document.getElementById("lessonTitle").innerText = lesson.title;

function loadSign(){
  const sign = lesson.signs[index];
  document.getElementById("counter").innerText =
    `Sign ${index+1} of ${lesson.signs.length}`;
  document.getElementById("signName").innerText = sign.name;
  document.getElementById("signExplanation").innerText = sign.explanation;
  document.getElementById("frame").src=sign.embed;
}

function next(){
  index++;
  if (index < lesson.signs.length){
    loadSign();
  } else{
    finishLeson();
  }
}
  
function finishLesson(){
  if (!completed.includes(lesson.id)){
    completed.push(lesson.id);
    localStorage.setItem("completedLessons",JSON.stringify(completed));
    updateStreak();
  }

  document.getElementById("status").innerText = "Lesson completed";
}
loadSign();
