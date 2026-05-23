"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	const d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return arr;
	} else if (d === 0) {
		const num = -b / (2 * a);
		arr.push(num);

		return arr;
	} else if (d > 0) {
		const num1 = (-b + Math.sqrt(d)) / (2 * a);
		const num2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(num1, num2);

		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const percentMonth = percent / 100 / 12;
	const bodyCredit = amount - contribution;

	if (bodyCredit <= 0) {
		return 0;
	}

	const payment = bodyCredit * (percentMonth + (percentMonth / ((1 + percentMonth) ** countMonths - 1)));

	const totalAmount = payment * countMonths;

	return Number(totalAmount.toFixed(2));
}