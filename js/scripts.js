// ---- Year update function ---- Footer --------------------------------
function updateYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
        yearElement.textContent = currentYear;
    } else {
        console.error("Element with ID 'currentYear' not found.");
    }
}


// ---- DOMContentLoaded Event Listener ---------------------------------
document.addEventListener("DOMContentLoaded", function () {
    updateYear();          // Update the year in the footer
    startTypingEffect();   // Start the typing effect
});

// ---- Typing effect function ---- Header ------------------------------
function startTypingEffect() {
    const textElement = document.getElementById("typing-text");
    if (textElement) {
        const text = "Welcome to My Profile";
        let index = 0;
        let isAdding = true;

        function type() {
            if (isAdding) {
                if (index < text.length) {
                    textElement.textContent += text.charAt(index);
                    textElement.style.color = "black"; // Ensure color is consistent
                    index++;
                    setTimeout(type, 100); // Speed of typing
                } else {
                    isAdding = false;
                    setTimeout(type, 5000); // Pause for 5 seconds when done typing
                }
            } else {
                textElement.textContent = '';
                index = 0;
                isAdding = true;
                setTimeout(type, 500); // Restart typing after a short delay
            }
        }

        type(); // Start the typing effect
    } else {
        console.error("Element with ID 'typing-text' not found.");
    }
}


