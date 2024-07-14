// Set the date for New Year's Day
const newYearDate = new Date("August 24, 2024 17:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  // Get the current time
  const now = new Date().getTime();

  // Calculate the distance between now and New Year's Day
  const distance = newYearDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
}, 1000);
