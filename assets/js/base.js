var codefin = codefin || {};
codefin.cronograph = codefin.cronograph || {};
codefin.cronograph.timeCounter = document.getElementById('maintimer');
codefin.cronograph.hundrethOfSecondTimer = document.getElementById('hundrethOfSecondTimer');
codefin.cronograph.secondTimer = document.getElementById('secondTimer');
codefin.cronograph.minuteTimer = document.getElementById('minuteTimer');
codefin.cronograph.startButton = document.getElementById('startButton');
codefin.cronograph.stopButton = document.getElementById('stopButton');
codefin.cronograph.refreshIntervalId = 0;
codefin.cronograph.ticks = 0;
codefin.cronograph.hundrethsOfSecond = codefin.cronograph.ticks;

codefin.cronograph.calculateHundrethOfSecond = function() {
	//if(Math.floor(codefin.cronograph.ticks/10) === 99) return 00;
	return Math.floor(codefin.cronograph.ticks/10);
}

codefin.cronograph.setTime = function() {
	++codefin.cronograph.ticks;
	//codefin.cronograph.timeCounter.innerHTML = codefin.cronograph.ticks;
	codefin.cronograph.hundrethOfSecondTimer.innerHTML = codefin.cronograph.calculateHundrethOfSecond();
	//codefin.cronograph.secondTimer.innerHTML = Math.floor(codefin.cronograph.ticks/100);
	//codefin.cronograph.minuteTimer.innerHTML = Math.floor(codefin.cronograph.ticks/100);
}

codefin.cronograph.startTimer = function() {
	codefin.cronograph.refreshIntervalId = setInterval(codefin.cronograph.setTime, 1);
}

codefin.cronograph.stopTimer = function() {
	clearInterval(codefin.cronograph.refreshIntervalId);
}

codefin.cronograph.init = function() {
	codefin.cronograph.startButton.addEventListener("click", function() {
		codefin.cronograph.startTimer();
	});
	codefin.cronograph.stopButton.addEventListener("click", function() {
		codefin.cronograph.stopTimer();
	});
};

(function() {
	codefin.cronograph.init();
})();
