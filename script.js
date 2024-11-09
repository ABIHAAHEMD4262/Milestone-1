document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-skills");
    var skillsSection = document.getElementById("skills");
    toggleButton.addEventListener("click", function () {
        skillsSection.classList.toggle("hidden");
    });
});
