const elClick = document.querySelector('div.dropdown__value');
const elList = document.querySelector('ul.dropdown__list');

elClick.onclick = () => {

  elList.classList.add('dropdown__list_active');

  elList.onclick = function(event) {
    let target = event.target.closest('li'); 
    elClick.textContent = target.textContent.trim();
    elList.classList.remove('dropdown__list_active'); 
    return false; 
    }
}