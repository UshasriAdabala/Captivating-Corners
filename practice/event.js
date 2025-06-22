// Click event handler
document.getElementById('clickButton').addEventListener('click', function() {
  changeColorRandom();
});

// Submit event handler
document.getElementById('submitForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission and page reload
  changeColorRandom();
});

// Mouseover event handler
document.getElementById('mouseoverButton').addEventListener('mouseover', function() {
  changeColorRandom();
});

// Function to change background color randomly
function changeColorRandom() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
