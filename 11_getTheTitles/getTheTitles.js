const getTheTitles = function (books) {
	return books.reduce((allBooks, book) => {
		allBooks.push(book.title);
		return allBooks;
	}, []);
};

// Do not edit below this line
module.exports = getTheTitles;
