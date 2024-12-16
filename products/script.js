// Select the button
const button = document.querySelector('.roselyn-spark-button');

// Define a distance threshold for rotation (when cursor is too far, reset the button)
const rotationThreshold = 300; // Distance in pixels
const rotationSpeed = 0.1; // Controls the rotation speed

// Mouse move event listener
document.addEventListener('mousemove', (e) => {
  // Get the mouse position
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Calculate the position of the button with a delay to create slow-motion effect
  const distanceX = (mouseX - button.offsetLeft - button.offsetWidth / 2) * 0.1; // Slow the movement (0.1 factor)
  const distanceY = (mouseY - button.offsetTop - button.offsetHeight / 2) * 0.1; // Slow the movement (0.1 factor)

  // Calculate the distance between the cursor and the center of the screen
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));

  // Calculate the rotation angle based on the cursor position, but limit it when the mouse is far
  const angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI); // Angle in degrees
  const limitedAngle = (distance < rotationThreshold) ? angle * rotationSpeed : 0; // Limit rotation if the mouse is too far

  // Apply the new position and rotation to the button
  button.style.transform = `translate(${distanceX}px, ${distanceY}px) rotate(${limitedAngle}deg)`;
});