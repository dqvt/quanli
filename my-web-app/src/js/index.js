// This file contains the JavaScript code for the web application.

// Function to manipulate the DOM
function updateContent() {
    const element = document.getElementById('content');
    element.innerHTML = 'Hello, World!';
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
});