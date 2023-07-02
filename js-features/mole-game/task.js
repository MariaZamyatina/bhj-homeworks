let getHole = index => document.getElementById(`hole${index}`),
miss = document.getElementById('lost').textContent,
counter = document.getElementById('dead').textContent;

for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);
  hole.addEventListener('click', () => {
    if (hole.className.includes('hole_has-mole')) { 
      counter++;
      document.getElementById('dead').textContent = counter; }
    else { 
      miss++;
      document.getElementById('lost').textContent = miss;
      };
    if (counter === 10) {
      changeStatus('Вы победили!');
      }
    else if (miss === 5) {
      changeStatus('Вы приграли!');
      };
  });
};

function changeStatus(text) {
  document.getElementById('lost').textContent = 0;
  document.getElementById('dead').textContent = 0;
  miss = 0;
  counter = 0;
  alert(text);
};