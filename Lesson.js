const lessonId = localStorage.getItem("currentLesson");
const lessons = course[0].lessons;
const lesson = lessons.find(1=> 1.id == lessonID);

let index = 0;
const completed=
  JSON.parse(localStorage.getItem("completedLessons")|| [];
document.getElementById("lessonTitle").innerText= lesson.title;

function loadSign(){
  const sign = lesson.signs[index];
  document.getElementById("counter").innerText = 
