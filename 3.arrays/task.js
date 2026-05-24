function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((elm, index) => {
		return elm === arr2[index];
	});
}

function getUsersNamesInAgeRange(users, gender) {
	let arr = users;

	let result = arr
		.filter(user => user.gender === gender)
		.map(user => user.age)
		.reduce((sum, age, _, arr) => sum + age / arr.length, 0);

	return result;
}