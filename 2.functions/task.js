function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let elm of arr) {
		if (elm < min) {
			min = elm;
		}
    
    if (elm > max) {
			max = elm;
		}

		sum += elm;
	}

	const avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sum = 0;

	for (let elm of arr) {
		sum += elm;
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let min = Infinity;
	let max = -Infinity;

	for (let elm of arr) {
		if (elm < min) {
			min = elm;
		}

		if (elm > max) {
			max = elm;
		}
	}

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let elm of arr) {
		if (elm % 2 === 0) {
			sumEvenElement += elm;
		} else {
			sumOddElement += elm;
		}
	}

	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let elm of arr) {
		if (elm % 2 === 0) {
			sumEvenElement += elm;
			countEvenElement++;
		}
	}

	if (countEvenElement === 0) {
		return 0;
	}

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let arr of arrOfArr) {
		const result = func(...arr);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}