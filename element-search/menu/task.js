const element_to_active = Array.from(document.querySelectorAll('.menu__link'));

element_to_active.forEach((element) => {
    element.onclick = () => {
        
        if (element.parentElement.querySelector('.menu_sub').className === 'menu menu_sub') {
            
            element.parentElement.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        } 
        else {
            element.parentElement.querySelector('.menu_sub').className = 'menu menu_sub';
          
        };
        if (element.closest('.menu_main')) {
			return false
		}   
    }
});
