const element_to_active = Array.from(document.querySelectorAll('.menu__link'));

element_to_active.forEach((elem) => {

    elem.onclick = () => {

        if (elem.nextElementSibling === null) {
            return false
            } 

        else { 
            if (elem.nextElementSibling.classList.contains('menu_active')) {
                elem.nextElementSibling.classList.remove('menu_active');       
                }
            else {
                elem.nextElementSibling.classList.add('menu_active') ;   
                }
            if (elem.closest('.menu_main')) {
                return false
            }   
        }   
    }   
});