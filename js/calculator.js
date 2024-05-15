// calculator.js
function calculator(operation, num1, num2) {
    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        console.log("Invalid operation!");
    }
  }
  