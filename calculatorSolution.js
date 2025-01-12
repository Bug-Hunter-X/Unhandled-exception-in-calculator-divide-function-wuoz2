function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const calculator = {
  add,
  subtract,
  multiply,
  divide
};

try {
  const result = calculator.divide(10, 0);
  console.log(result);
} catch (error) {
  console.error('Error:', error.message);
}
module.exports = calculator;