let expression = '';

function append(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function calculate() {
  const result = eval(expression);
  document.getElementById('display').value = result;
  expression = result;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}
