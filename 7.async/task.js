class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		const sameTime = this.alarmCollection.find(
			item => item.time === time
		);

		if (sameTime) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			time: time,
			callback: callback,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(function(item) {
			return item.time !== time;
		});
	}

	getCurrentFormattedTime() {
		const date = new Date();

		let hours = date.getHours();
		let minutes = date.getMinutes();

		if (hours < 10) {
			hours = '0' + hours;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		return hours + ':' + minutes;
	}

	start() {
		if (this.intervalId) {
			return;
		}

		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();

			this.alarmCollection.forEach(item => {
				if (item.time === currentTime && item.canCall) {
					item.canCall = false;
					item.callback();
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(item => {
			item.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}