const counter = document.getElementById('count');

const buttons = document.querySelectorAll('.btn');

let count = 0;
buttons.forEach((btn) =>
  btn.addEventListener('click', () => {
    if (btn.classList.contains('decrease')) count--;
    else if (btn.classList.contains('reset')) count = 0;
    else if (btn.classList.contains('increase')) count++;

    counter.textContent = count;
    if (count < 0) counter.style.color = 'red';
    else if (count > 0) counter.style.color = 'green';
  })
);
