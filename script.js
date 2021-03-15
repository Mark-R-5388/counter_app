const counter = document.getElementById('count');
const subtractBtn = document.getElementById('subtract');
const resetBtn = document.getElementById('reset');
const addBtn = document.getElementById('add');

let count = 0;

window.addEventListener('click', counterProcess);

function counterProcess(event) {
  counter.value = count;
  if (event.target == subtractBtn) {
    count--;
    counter.innerText = count;
  } else if (event.target == addBtn) {
    count++;
    counter.innerText = count;
  } else if (event.target == resetBtn) {
    count = 0;
    counter.innerText = count;
  }
}
