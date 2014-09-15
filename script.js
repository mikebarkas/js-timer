function startCountdown () {
  // Get minutes entered.
  var minutes = document.getElementById('minutes').value;
  
  // Check if not a number.
  if (isNaN(minutes)) {
    alert('Please enter a number.');
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