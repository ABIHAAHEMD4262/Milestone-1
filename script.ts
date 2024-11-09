const toggleButton = document.getElementById("toggle-skills")!;
const skillsSection = document.getElementById("skills")!;

toggleButton.addEventListener("click", () => {
  if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
    skillsSection.style.display = "block"; // Show skills section
  } else {
    skillsSection.style.display = "none"; // Hide skills section
  }
});
