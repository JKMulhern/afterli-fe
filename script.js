// Database of food smells
var foodSmells = {
  "Eggs": "Sulphuric smell",
  "Coffee": "Rich, aromatic smell",
  // Add other food items here
  "Tomatoes": "Sweet, acidic smell"
};

// Function to populate the dropdown with food items
function populateDropdown() {
  var select = document.getElementById('food-select');
  for (var food in foodSmells) {
    var option = document.createElement('option');
    option.value = food;
    option.text = food;
    select.appendChild(option);
  }
}

// Function to predict smell based on selected food
function predictSmell() {
  var selectedFood = document.getElementById('food-select').value;
  var resultDiv = document.getElementById('result');
  var predictedSmell = foodSmells[selectedFood] || "Food not found in the database";
  resultDiv.innerHTML = "The predicted smell for " + selectedFood + " is: " + predictedSmell;
}

// Call the populateDropdown function on page load
window.onload = populateDropdown;
