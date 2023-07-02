const img = document.getElementById('cookie');    

(() => {
    let counter = 0,
    flag = false; 
    img.onclick = () => {
        img.width = !flag ? 250 : 200;
        flag = flag ? false : true;
        counter++;
        document.getElementById('clicker__counter').textContent = counter;
    };
})();
