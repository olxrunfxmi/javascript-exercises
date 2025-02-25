const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (arr) {
	return arr.reduce((acc, number) => acc + number, 0);
};

const multiply = function (arr) {
	return arr.reduce((acc, number) => acc * number, 1);
};

const power = function (num, pow) {
	let series = num;
	for (let index = 1; index < pow; index++) {
		num *= series;
	}
	return num;
};

const factorial = function (num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
