const projects = [
  {
    projectName: "Italian Restaurant Website",
    projectDescription:
      "A fully responsive Italian restaurant website built from a Figma design. Created to practice complete UI implementation and DOM manipulation.",
    tags: ["HTML5", "CSS3", "JavaScript", "Vite"],
    demoLink: "https://reham-shendy.github.io/Italian_Restaurant/",
  },
  {
    projectName: "Process Scheduling Simulator",
    projectDescription:
      "An interactive web tool to visualize and compare CPU scheduling algorithms (FCFS & Round Robin). Features interactive process tables, visual Gantt charts, and performance metrics.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demoLink: "https://reham-shendy.github.io/Process-Scheduler/",
  },
  {
    projectName: "Social Media App",
    projectDescription:
      "A frontend social media application interface built to practice complex UI layouts and DOM manipulation without frameworks.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Reham-shendy/socialMedia-App",
  },
  {
    projectName: "Productivity & Notes App",
    projectDescription:
      "A cross-platform mobile application featuring note-taking capabilities, task checklists, a priority matrix, and a Pomodoro timer. Built to explore Flutter UI components and mobile fundamentals.",
    tags: ["Flutter", "Dart", "Mobile Dev"],
    githubLink: "https://github.com/Reham-shendy/Notes_App-Flutter",
  },
];

function generateProjectCard({
  projectName,
  projectDescription,
  tags,
  demoLink,
  githubLink,
}) {
  return `
    <div class="col-md-6">
      <div class="project-card p-4 d-flex flex-column h-100">
        <p class="project-name">${projectName}</p>
        <p class="about-project flex-grow-1">${projectDescription}</p>
        
        <div class="d-flex flex-column justify-content-between mt-3">
          <div class="tags mb-3">
            <ul>
              ${tags.map((tag) => `<li>${tag}</li>`).join("")}
            </ul>
          </div>
          <div class="d-flex gap-2 justify-content-end">
            ${githubLink ? `<a href="${githubLink}" target="_blank" class="btn btn-sm btn-outline-light demo" style="font-family: var(--mono); font-size: 11px; border-color: var(--accent-gold); ;"><i class="fa-brands fa-github me-1"></i> Code</a>` : ""}
            ${demoLink ? `<a href="${demoLink}" target="_blank" class="btn btn-sm btn-outline-light demo" style="font-family: var(--mono); font-size: 11px; border-color: var(--accent-gold); ;">Live Demo <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i></a>` : ""}
          </div>
        </div>
      </div>
    </div>`;
}
const projectsPart = document.querySelector(".projects-part");

projectsPart.insertAdjacentHTML(
  "beforeend",
  projects.map((project) => generateProjectCard(project)).join(""),
);

const navLinks = document.querySelectorAll(".nav-bar li");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-bar li.active")?.classList.remove("active");
    link.classList.add("active");
  });
});
