// Apenas adiciona dois números
function addTwoNumbers(num1, num2) {
  return Math.floor(num1 + num2);
}

function substractTwoNumbers(num1, num2) {
  return Math.floor(num1 - num2);
}

// Common JS
module.exports = {
  addTwoNumbers,
  substractTwoNumbers,
};
