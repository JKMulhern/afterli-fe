// Database of food smells
var foodSmells = {
  "Eggs": "Strong, sulfurous smell",
  "Coffee": "Bitter, acrid smell",
  "Fish": "Mildly fishy smell",
  "Cheese": "Rich, cheesy smell",
  "Garlic": "Pungent, lingering smell",
  "Broccoli": "Strong, earthy smell",
  "Bacon": "Slightly smoky smell",
  "Pineapple": "Faintly sweet smell",
  // Add more food items here with corresponding after-digestion smells
};
document.getElementById("add-food-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  
  var foodName = document.getElementById("food-name").value;
  var foodSmell = document.getElementById("food-smell").value;
  
  // Add the new food and smell to the foodSmells object
  foodSmells[foodName] = foodSmell;
  
  // Update the dropdown list
  var dropdown = document.getElementById("food-dropdown");
  var option = document.createElement("option");
  option.value = foodName;
  option.text = foodName;
  dropdown.add(option);
  
  // Optional: Clear the input fields
  document.getElementById("food-name").value = "";
  document.getElementById("food-smell").value = "";
});

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
