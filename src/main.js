const display = document.getElementById('display');

const buttons = document.querySelectorAll('.Calculator button');

const operatorNames = ['*', '/', '+', '-', '.', '%', 'multiply', 'divide', 'add', 'subtract', 'decimal', 'mod'];

let lastPressed = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    lastPressed = display.value.slice(-1);

    if (!(operatorNames.includes(lastPressed) && operatorNames.includes(button.id))) {
      switch (button.id) {
        case 'clear':
          display.value = '';
          break;

        case 'delete':
          display.value = display.value.slice(0, -1);
          break;

        case 'decimal':
          display.value += '.';
          break;

        case 'multiply':
          display.value += '*';
          break;

        case 'divide':
          display.value += '/';
          break;

        case 'add':
          display.value += '+';
          break;

        case 'subtract':
          display.value += '-';
          break;

        case 'mod':
          display.value += '%';
          break;

        case 'equals':
          try {
            display.value = eval(display.value);
          } catch (e) {
            display.value = 'Error';
          }
          break;

        default:
          display.value += button.id;
      }
    }
  });
});
