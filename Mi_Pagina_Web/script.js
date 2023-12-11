const buttons = document.querySelectorAll('.read-more-btn');
const textElements = document.querySelectorAll('.hideText');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    const buttonText = button.textContent;

    textElement.classList.toggle('showText');

    if (textElement.classList.contains('showText')) {
      button.textContent = 'Leer menos';
    } else {
      button.textContent = 'Leer más';
    }
  });
});
