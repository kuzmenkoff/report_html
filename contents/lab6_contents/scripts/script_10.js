function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function Create() {
  const input = document.querySelector('#controls input');
  const amount = input.value;
  if (amount >= 1 && amount <= 100)
    createBoxes(amount);

  input.value = '';
}

function Destroy() {
  document.getElementById('boxes').innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
