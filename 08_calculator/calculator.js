const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((accum, currentValue) => accum += currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((accum, reduce) => accum *= reduce, 1);
};

const power = function(a, b) {
	let total = 1;
  for (let i = 0; i < b; i++) {
    total *= a;
  }
  return total;
};

const factorial = function(a) {
	if (a == 0 || a == 1) {
    return 1;
  }
  return a * factorial(a-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
