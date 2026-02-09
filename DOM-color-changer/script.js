// Access buttons using DOM 
const redButton = document.getElementById("redBtn"); 
const greenButton = document.getElementById("greenBtn"); 
const blueButton = document.getElementById("blueBtn"); 
const resetButton = document.getElementById("resetBtn"); 

// New elements for Practice Exercise 1 and 2
const customColorInput = document.getElementById("customColor");
const applyCustomBtn = document.getElementById("applyCustomBtn");
const colorDisplay = document.getElementById("colorDisplay");

// Track current color for display
let currentColor = "white";

// Function to update display and disable buttons after selection
function updateDisplayAndDisable() {
    colorDisplay.textContent = `Current Color: ${currentColor}`;
    redButton.disabled = true;
    greenButton.disabled = true;
    blueButton.disabled = true;
}

// Function to enable buttons on reset
function enableButtons() {
    redButton.disabled = false;
    greenButton.disabled = false;
    blueButton.disabled = false;
}

// Add event listeners to change background color 
redButton.addEventListener("click", function () { 
    document.body.style.backgroundColor = "red"; 
    currentColor = "red";
    updateDisplayAndDisable();
}); 
 
greenButton.addEventListener("click", function () { 
    document.body.style.backgroundColor = "green"; 
    currentColor = "green";
    updateDisplayAndDisable();
}); 
 
blueButton.addEventListener("click", function () { 
    document.body.style.backgroundColor = "blue"; 
    currentColor = "blue";
    updateDisplayAndDisable();
}); 
 
resetButton.addEventListener("click", function () { 
    document.body.style.backgroundColor = "white"; 
    currentColor = "white";
    colorDisplay.textContent = `Current Color: ${currentColor}`;
    enableButtons();
}); 

// New event listener for Practice Exercise 1: Apply custom color
applyCustomBtn.addEventListener("click", function () {
    const customColor = customColorInput.value.trim();
    if (customColor) {
        document.body.style.backgroundColor = customColor;
        currentColor = customColor;
        updateDisplayAndDisable();
        customColorInput.value = ""; // Clear input after applying
    } else {
        alert("Please enter a valid color name or code.");
    }
});