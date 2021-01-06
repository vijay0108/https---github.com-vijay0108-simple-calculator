// Clears the screen on click of C button.
function clearScreen() {
    document.getElementById("result").value = "";
  }
  // Displays the entered value on screen.
  function liveScreen(value) {
    document.getElementById("result").value += value;
  }