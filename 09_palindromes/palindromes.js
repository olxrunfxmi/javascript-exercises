const palindromes = function (str) {
	// Split the string to filter out the punctuations and spaces
	let wordSplit = str.split("");
	let filteredWordSplit = wordSplit.filter((char) => {
		if (!(char === "!" || char === " " || char === "," || char === ".")) {
			return true;
		}
    });
    
	// Now, we have the filtered word in lower case (correct and reverse) for easy comparison
	let filteredWord = filteredWordSplit.join("").toLowerCase();
	let reversedWord = filteredWordSplit.reverse().join("").toLowerCase();

	// Now, let's compare and return
	return filteredWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
