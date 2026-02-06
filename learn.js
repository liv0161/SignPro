








const container=document.getElementById("lessonContainer");
lessons.forEach(lesson => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${lesson.title}</h3>
    <p>${lesson.description}</p>
    <a href="${lesson.link}" target="_blank">
      View sign on UCL SignBank
    </a>
  `;
  container.appendChild(div);
});
