var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "<h3>This is a list of Boy Bands</h3>";

// Keep track of which veggie we're on in the loop
var currentVeggie = "<h3>This is a list of Vegetables</h3>";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker++) {

  // Add the band names into the correct <div>
  currentBand += "<p>" + bands[loopTracker] + "</p>";

  // Add the veggie names into the correct <div>
  currentVeggie += "<p>" + vegetables[loopTracker] + "</p>";

}
bandElement.innerHTML = currentBand;
veggieElement.innerHTML = currentVeggie;