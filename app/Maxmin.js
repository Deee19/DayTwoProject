module.exports = {
	findMinMax: function (numbers) {
		min = numbers[0];
		max = numbers[0];

		for (var i = 0; i < numbers.length; i++) {

			if (numbers[i] < min) {
				min = numbers[i];
			} else if (numbers[i] > max) {
				max = numbers[i];
			}
		}

		if (min == max) {
			return [max];
		} else {
			return [min, max]
		}

	}
}