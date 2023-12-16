let counterValue = 0;
const counterElement = document.getElementById('counter');

function updateCounter() {
  counterElement.textContent = counterValue;
}

function increase() {
  counterValue += 1;
  updateCounter();
}

function decrease() {
  counterValue -= 1;
  updateCounter();
}

function reset() {
  counterValue = 0;
  updateCounter();
}
