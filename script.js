// Database of food smells
var foodSmells = {
  "Eggs": "Strong, sulfurous farts",
  "Coffee": "Bitter, acrid farts",
  "Fish": "Mildly fishy toots",
  "Cheese": "Rich, cheesy stinkers",
  "Garlic": "Pungent, lingering odor",
  "Broccoli": "Strong, earthy farts",
  "Bacon": "Slightly smoky but still disgusting",
  "Pineapple": "Faintly sweet, good for sbd farts"
  // Add more food items here with corresponding after-digestion smells
};

// Function to populate the dropdown
function populateDropdown() {
  var dropdown = document.getElementById("food-dropdown");
  for (var food in foodSmells) {
    var option = document.createElement("option");
    option.value = food;
    option.text = food;
    dropdown.add(option);
  }
}

// Call the function when the page loads
populateDropdown();

document.getElementById("add-food-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
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
  
  // Clear the input fields
  document.getElementById("food-name").value = "";
  document.getElementById("food-smell").value = "";
});

// Function to predict smell based on selected food
function predictSmell() {
  var selectedFood = document.getElementById('food-dropdown').value;
  var resultDiv = document.getElementById('result');
  var predictedSmell = foodSmells[selectedFood] || "Food not found in the database";
  resultDiv.innerHTML = "The predicted smell for " + selectedFood + " is: " + predictedSmell;
}

