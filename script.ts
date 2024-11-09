document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-skills")!;
    const skillsSection = document.getElementById("skills")!;
  
    toggleButton.addEventListener("click", () => {
      skillsSection.classList.toggle("hidden");
    });
  });
  