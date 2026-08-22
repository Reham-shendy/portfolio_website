const projects = [
  {
    projectName: "Project Title",
    projectDescription: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eligendi vitae, quas nobis soluta exercitationem expedita quissimilique saepe illo`,
    tags: ["HTML", "CSS", "JS"],
  },
  {
    projectName: "Project Title",
    projectDescription: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eligendi vitae, quas nobis soluta exercitationem expedita quissimilique saepe illo`,
    tags: ["HTML", "CSS", "JS"],
  },
  {
    projectName: "Project Title",
    projectDescription: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eligendi vitae, quas nobis soluta exercitationem expedita quissimilique saepe illo`,
    tags: ["HTML", "CSS", "JS"],
  },
  {
    projectName: "Project Title",
    projectDescription: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eligendi vitae, quas nobis soluta exercitationem expedita quissimilique saepe illo`,
    tags: ["HTML", "CSS", "JS"],
  },
];

function generateProjectCard({ projectName, projectDescription, tags }) {
  return `<div class="project-card">
          <p class="project-name">${projectName}</p>
          <p class="about-project">${projectDescription}</p>
          <div class="tags"><ul>${tags
            .map((tag) => {
              return `<li>${tag}</li>`;
            })
            .join("")}</ul></div>
        </div>`;
}

const projectsPart = document.querySelector(".projects-part");

projectsPart.insertAdjacentHTML(
  "beforeend",
  projects
    .map((project) => {
      return generateProjectCard(project);
    })
    .join(""),
);

const navLinks = document.querySelectorAll(".nav-bar li");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-bar li.active")?.classList.remove("active");

    link.classList.add("active");
  });
});
