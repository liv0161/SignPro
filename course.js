const completed = 
  JSON.parse(localStorage.getItem("completedLessons")) || [];

const container = document.getElementById("course");
course[0].lessons.forEach((lesson,i)=>{
  const unlocked = i === 0 || completed.includes(course[0].lessons[i-1].id);
  
  container.innerHTL += `
    <div>
      <h3>${lesson.title}</h3>
      <button ${!unlocked ? "disabled" : ""}
      onclick = "startLesson('${lesson.id}')">
      ${unlocked ? "Start" : "Locked"}
    </button>
  </div>
  `;
});
function startLesson(id) {
  localStorage.setItem("currentLesson",id);
  window.loction.href = "lesson.html";
}
              
