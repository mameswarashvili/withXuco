document.getElementById("close-button").onclick = function() {
    // Hide the overlay
    document.getElementById("overlay").style.display = "none";
};

// Optionally, you can show the overlay on page load
window.onload = function() {
    document.getElementById("overlay").style.display = "flex"; // Show overlay on page load
};
