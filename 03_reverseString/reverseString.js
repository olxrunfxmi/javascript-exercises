const reverseString = function (string) {
	const splitString = string.split("");
	let reverseString = "";

	for (let index = splitString.length - 1; index >= 0; index--) {
		reverseString += splitString[index];
	}

	return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
