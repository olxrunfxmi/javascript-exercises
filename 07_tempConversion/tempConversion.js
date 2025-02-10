const convertToCelsius = function (fahrenheit) {
	celsius = (5 / 9) * (fahrenheit - 32);
	celsius = celsius.toFixed(1);
	celsius = Number(celsius);
	return celsius;
};

const convertToFahrenheit = function (celsius) {
	fahrenheit = (9 / 5) * celsius + 32;
	fahrenheit = fahrenheit.toFixed(1);
	fahrenheit = Number(fahrenheit);
	return fahrenheit;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
