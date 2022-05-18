const calcBtn = document.querySelector("#calc-btn");
calcBtn.onclick = () => calcArea();

function calcArea() {
  const widthInput = document.querySelector("#width-input");
  const lengthInput = document.querySelector("#length-input");

  const width = widthInput.value;
  const length = lengthInput.value;
  const area = width * length;

  const outputElement = document.querySelector("#calculated-area");
  outputElement.innerText = area;
}
