// Get the elements
var display = document.getElementById("result");
var percent = document.getElementById("percent");
var clear = document.getElementById("ac");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");
var subtract = document.getElementById("subtract");
var add = document.getElementById("add");
var equal = document.getElementById("equal");
var dot = document.getElementById("dot");
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

// Define the variables
var firstNumber = "";
var secondNumber = "";
var operator = "";
var result = "";

// Define the functions
function updateDisplay() {
  display.innerHTML = firstNumber + operator + secondNumber
}

function clearAll() {
  firstNumber = "0";
  secondNumber = "";
  operator = "";
  result = "";
  updateDisplay();
}

function appendNumber(number) {
  if (firstNumber == result && operator == "") {
    clearAll();
  }
  if (operator == "") {
    if (firstNumber == 0) {
      firstNumber = number;
    } else { firstNumber += number; }
  } else {
    secondNumber += number;
  }
  updateDisplay();
}

function appendDot() {
  if (operator == "") {
    if (firstNumber == "") {
      firstNumber = "0.";
    } else if (firstNumber.indexOf(".") == -1) {
      firstNumber += ".";
    }
  } else {
    if (secondNumber == "") {
      secondNumber = "0.";
    } else if (secondNumber.indexOf(".") == -1) {
      secondNumber += ".";
    }
  }
  updateDisplay();
}

function setOperator(op) {
  if (firstNumber == "") {
    firstNumber = "0";
  }
  if (secondNumber != "") {
    calculate();
  }
  operator = op;
  updateDisplay();
}

function calculate() {
  if (firstNumber == "") {
    firstNumber = "0";
  }
  if (secondNumber == "") {
    secondNumber = "0";
  }
  var num1 = parseFloat(firstNumber);
  var num2 = parseFloat(secondNumber);
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 * 10 / 100;
      break;
    default:
      result = num1;
  }
  display.innerHTML = result;
  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
}

// Add the event listeners
clear.addEventListener("click", clearAll);
divide.addEventListener("click", function () {
  setOperator("/");
});
multiply.addEventListener("click", function () {
  setOperator("*");
});
subtract.addEventListener("click", function () {
  setOperator("-");
});
add.addEventListener("click", function () {
  setOperator("+");
});
percent.addEventListener("click", function () {
  setOperator("%");
});
equal.addEventListener("click", calculate);
dot.addEventListener("click", appendDot);
zero.addEventListener("click", function () {
  appendNumber("0");
});
one.addEventListener("click", function () {
  appendNumber("1");
});
two.addEventListener("click", function () {
  appendNumber("2");
});
three.addEventListener("click", function () {
  appendNumber("3");
});
four.addEventListener("click", function () {
  appendNumber("4");
});
five.addEventListener("click", function () {
  appendNumber("5");
});
six.addEventListener("click", function () {
  appendNumber("6");
});
seven.addEventListener("click", function () {
  appendNumber("7");
});
eight.addEventListener("click", function () {
  appendNumber("8");
});
nine.addEventListener("click", function () {
  appendNumber("9");
});