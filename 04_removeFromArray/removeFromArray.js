const removeFromArray = function (array, value) {
	args = [...arguments];
	return args[0].filter((x) => !args.slice(1).includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
