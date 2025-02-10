const sumAll = function (arg1, arg2) {
	let start, end;

	if (
		arg1 < 0 ||
		arg2 < 0 ||
		arg1 % 1 !== 0 ||
		arg2 % 1 !== 0 ||
		typeof arg1 !== "number" ||
		typeof arg2 !== "number"
	) {
		return "ERROR";
	}

	if (arg1 > arg2) {
		end = arg1;
		start = arg2;
	} else {
		start = arg1;
		end = arg2;
	}

	let sum = 0;

	for (let i = start; i <= end; i++) {
		sum += i;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
