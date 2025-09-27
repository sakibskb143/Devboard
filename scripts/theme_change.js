const themeChange = document.getElementById('theme-btn');

const colors = [
  "#3752FD",
  "#414785",
  "#49B296",
  "#622876",
  "#81C6D5",
  "#89C247",
  "#962B7C",
  "#CB2E81",
  "#E78836",
  "#F4F7FF",
  "#F6F0E0",
  "#F9CC4B",
  "#FF3187",
  "#FF5178",
  "#FF9259",
  "#FFB24A",
  "#FFD23B"
];

themeChange.addEventListener('click', function(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
});
