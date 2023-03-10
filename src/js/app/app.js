import { type } from '../type/type';
import { validate } from '../validate/validate';

const result = document.getElementById('result');
const input = document.querySelector('input');

function clear() {
  const cards = document.querySelectorAll('.card');
  for (const card of cards) {
    if (card.classList.contains('active') || result.textContent === 'invalid') {
      card.classList.remove('active');
      // eslint-disable-next-line no-unused-expressions
      type(input.value) === '';
    }
  }
}

if (document !== 'undefined') {
  input.addEventListener('input', () => {
    const typeCard = type(input.value);
    if (typeCard) {
      document.querySelector(`${typeCard}`).classList.add('active');
    } else {
      clear();
    }
  });
  input.parentNode.addEventListener('submit', (e) => {
    e.preventDefault();
    result.textContent = '';
    // eslint-disable-next-line no-unused-expressions
    validate(input.value) ? result.textContent = 'valid' : result.textContent = 'invalid';
    input.value = '';
    clear();
  });
}
