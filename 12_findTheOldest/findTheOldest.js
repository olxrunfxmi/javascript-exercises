const findTheOldest = function (people) {
	const sortedPeople = people.sort((a, b) => {
		// Person A
		aBirthYear = a.yearOfBirth;
		aDeathYear = a.yearOfDeath ? a.yearOfDeath : new Date().getFullYear();
		aAge = aDeathYear - aBirthYear;

		// Person B
		bBirthYear = b.yearOfBirth;
		bDeathYear = b.yearOfDeath ? b.yearOfDeath : new Date().getFullYear();
		bAge = bDeathYear - bBirthYear;

		return aAge - bAge;
    });
    return sortedPeople[sortedPeople.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
