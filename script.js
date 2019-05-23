// variables

let oaoStack = [];
let i = 0;



// MAIN FUNCTION

function main() {

}



// Main 4 arithmatic operators

function divide(index) { //find number before and after add in OaO array and divide first by last and shrink array 3-1
  // add error message for diving by 0

}

function multiply(index) { //find number before and after add in OaO array and multiply them and shrink array 3-1
  let answer = oaoStack[index-1] * oaoStack[index+1];
  oaoStack[index+1] = answer;
  oaoStack.splice((index-1), 2);
}

function add() { //find number before and after add in OaO array and add them and shrink array 3-1

}

function subtract() { //find number before and after add in OaO array and subtract them and shrink array 3-1

}


// Other calculation operators

function addToStack(buttonInput) {
  oaoStack[i] = buttonInput;
  i+= 1;
}

function operate() { // Performs full calculation on OaO stack

}

function clear() { // Clears display and current OaO stack

}

function backspace() { // Removes previous number key or operator entry from display and OaO stack

}

function decimalise() { // Takes numbers and decimal between operators and combines to floating point number in stack

}


// Display functions

function updateDisplay() { //Called on any calculation update to output current OaO array

}
