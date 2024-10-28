function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hour is 0, set to 12

  // Pad minutes and seconds with leading zeros
  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  // Update the HTML elements
  document.getElementById('hours').textContent = formattedHours;
  document.getElementById('minutes').textContent = formattedMinutes;
  document.getElementById('seconds').textContent = formattedSeconds;
  document.getElementById('ampm').textContent = ampm;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock display
updateClock();
