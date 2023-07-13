document.addEventListener('change', (e) => {
  const el = e.target;
  const parent = el.closest('li.interest'); // находим родителя 
  const status = el.checked;
  const kids = parent.querySelectorAll('input'); // находим все input дерева
  setChecked(kids, status);
});

// выставляем статус чекбоксу такой же как у первого
function setChecked(array, status) {
  for (let i = 1; i <= array.length - 1; i ++) {
    array[i].checked = status;
  }
};