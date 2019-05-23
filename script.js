// variables

let oaoStack = [];
let numCheck = /[0-9]/;
let i = 0;
    n = 0;
    x = 0;



// MAIN FUNCTION

function operate() { // Performs full calculation on OaO stack

  joinNumbers();

  for (n==1; n<i; n++) {
    switch (oaoStack[n]) {
      case "MULTIPLY": multiply(n); break;
      case "DIVIDE": divide(n); break;
    }
  }
}

// Main 4 arithmatic operators

function divide(index) { //find number before and after add in OaO array and divide first by last and shrink array 3-1
  // add error message for diving by 0
  let answer = oaoStack[index-1] / oaoStack[index+1];
  oaoStack[index+1] = answer;
  oaoStack.splice((index-1), 2);
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

function addToStack(buttonInput) { // Add value of button pressed into the OaO array
  oaoStack[i] = buttonInput;
  i+= 1;
}

function joinNumbers() { // Join together concurrent digits in oaoStack to form actual number
  let sum = "";
  let digitCount = 0;

  for (x==0; x<i; x++) {
   if (numCheck.test(oaoStack[x])) {
     sum += oaoStack[x].toString();
     digitCount += 1;
   } else {
     oaoStack[x-1] = parseInt(sum);
     oaoStack.splice((x-digitCount), digitCount-1)
     x++; // Prevent looping over the same values already joined
   }
  }
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
