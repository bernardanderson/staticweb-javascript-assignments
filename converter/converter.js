// When the radio button to convert to Celsius is selected this 
// sets the value of the temp input to a variable, performs the conversion,
// sets the temperature unit and then calls the printing function.
function toCelsius () {

  var tempValue = document.getElementById("tempvalue").value;
  var convertedTemp = ((tempValue - 32) / 1.8);
  var tempUnit = "&deg;C";

  printConvertedTemp(convertedTemp, tempUnit);
}


// When the radio button to convert to Fahrenheit is selected this 
// sets the value of the temp input to a variable, performs the conversion,
// sets the temperature unit and then calls the printing function.
function toFahrenheit () {

  var tempValue = document.getElementById("tempvalue").value;
  var convertedTemp = ((tempValue * 1.8) + 32);
  var tempUnit = "&deg;F";

  printConvertedTemp(convertedTemp, tempUnit);

}

// This function takes the information from the radio buttons and determines
// which of the calculation functions should be called.
function determineConverter (keyEvent) {

// Loads the radio buttons with the name of 'tempScale' into an array
  var converterType = document.getElementsByName('tempscale');

// This loop cycles through the radio button array checking to see if the value
// is either celsius or fahrenheit AND if the button is checked.
// If both tests are true, then the appropriate conversion function is called. 
  for (var i = 0; i < converterType.length; i++) {

// Checks for checked celsius radio button 
    if (converterType[i].value === "celsius" && converterType[i].checked) {
      toCelsius();
    }

// Checks for checked fahrenheit radio button 
    if (converterType[i].value === "fahrenheit" && converterType[i].checked) {
      toFahrenheit();
    }
  }
}

// Prints out the resulting converted temperature and colors the temperature by 
// checking the range of the converted temperature.
function printConvertedTemp(tempValue, tempUnit){
  
  document.getElementById("convertedtemp").innerHTML = '<p>Your new temperature is: <span id="color"></span> ' + tempUnit +'</p>';

// Checks if the C temp is below 0 or F temp is below 32 and colors the temp blue if true
// Checks if the C temp is above 100 or F temp is above 212 and colors the temp red if true
// if neither are true the temp is colored green and printed.
  if ((tempUnit==="&deg;C" && tempValue < 0) || (tempUnit === "&deg;F" && tempValue < 32)) {

    document.getElementById("color").style.color="blue";
    document.getElementById("color").innerHTML=tempValue;

  } else if ((tempUnit==="&deg;C" && tempValue > 100) || (tempUnit === "&deg;F" && tempValue > 212)) {
        
    document.getElementById("color").style.color="red";
    document.getElementById("color").innerHTML = tempValue;
  
  } else {
    
    document.getElementById("color").style.color="green";
    document.getElementById("color").innerHTML= tempValue;
  
  }
}

// If a keypress is detected this checks to make sure the key pressed is
// the "enter" key. The "enter" key has a numeric value of 13.  If "enter" isn't
// pressed then nothing happens with the calculation.
function determinedKeyPressed(keyPress) {
  if (keyPress.which === 13) {
    determineConverter();
  }
}

// Function resets the input field if resetButton is pressed
function resetInput() {
  document.getElementById("tempvalue").value = "";
  document.getElementById("convertedtemp").innerHTML = "";
}


// Get a reference to the buttons in the DOM
var button = document.getElementById("converter");
var resetButton = document.getElementById("reset");


// Assign a function to be executed when the buttons are clicked
button.addEventListener("click", determineConverter);
resetButton.addEventListener("click", resetInput);

// Adds an listener to detect if ANY key is pressed."keydown" contains
// an object with a lot of info about the key that was pressed.
// When looking for a specific key, it's probably easiest to look the .which
// property which has a numeric value specfic to each key on the keyboard. 
document.addEventListener("keydown", determinedKeyPressed);
