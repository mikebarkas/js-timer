var secondsRemaining;
var intervalHandle;

// Show the form again.
function resetPage () {
  document.getElementById('inputArea').style.display = 'block';
}


function tick () {
  var timeDisplay = document.getElementById('time');

  var min = Math.floor(secondsRemaining / 60);
  var sec = secondsRemaining - (min * 60);

  if (sec < 10) {
    sec = '0' + sec;
  }

  var message = min.toString() + ':' + sec;

  timeDisplay.innerHTML = message;

  if (secondsRemaining === 0) {
    alert('Done!');
    clearInterval(intervalHandle);
    resetPage();
  }

  secondsRemaining--;
}

function startCountdown () {
  // Get minutes entered.
  var minutes = document.getElementById('minutes').value;
  
  // Check if not a number.
  if (isNaN(minutes)) {
    alert('Please enter a number.');
    return;
  }

  // Calculate seconds.
  secondsRemaining = minutes * 60;

  // Interval the tick function.
  intervalHandle = setInterval(tick, 1000);

  // Hide the form.
  document.getElementById('inputArea').style.display = 'none';
}

// When page loads.
window.onload = function () {
  // Create text input.
  var inputMinutes = document.createElement('input');
  inputMinutes.setAttribute('id', 'minutes');
  inputMinutes.setAttribute('type', 'text');

  // Create button.
  var startButton = document.createElement('input');
  startButton.setAttribute('type', 'button');
  startButton.setAttribute('value', 'Start Timer');
  // Button callback.
  startButton.onclick = function () {
    startCountdown();
  };

  // Add elements to DOM.
  document.getElementById('inputArea').appendChild(inputMinutes);
  document.getElementById('inputArea').appendChild(startButton);
};