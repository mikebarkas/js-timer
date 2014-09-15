
// When page loads.
window.onload = function () {
  // Create text input.
  var inputMinutes = document.createElement('input');
  inputMinutes.setAttributes('id', 'minutes');
  inputMinutes.setAttributes('type', 'text');

  // Create button.
  var startButton = document.createElement('input');
  startButton.setAttributes('type', 'button');
  startButton.setAttributes('value', 'Start Timer');
  // Button callback.
  startButton.onclick = function () {
    startCountdown();
  };
};