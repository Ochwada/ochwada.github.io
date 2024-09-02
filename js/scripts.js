
// ---- Year update function ---- Footer --------------------------------
function updateYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
}
  // Ensure the function runs after the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    updateYear();
});


// Function to load HTML files into their respective sections
function loadSection(sectionId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(sectionId).innerHTML = data;
        })
        .catch(error => console.error('Error loading section:', error));
}

// Load sections dynamically
document.addEventListener('DOMContentLoaded', function() {
    loadSection('header-section', 'sections/header.html');
    loadSection('work-section', 'sections/work.html');
    loadSection('events-section', 'sections/events.html');
    loadSection('cv-section', 'sections/cv.html');
});
