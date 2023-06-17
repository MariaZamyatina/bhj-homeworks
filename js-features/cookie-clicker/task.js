const img = document.getElementById('cookie');    

(() => {
    let counter = 0,
    flag = false; 
    img.onclick = () => {
        if (flag == true) {
            img.width -= 50;
            counter++;
            flag = false;
            document.getElementById('clicker__counter').textContent = counter;
            return
        }
        img.width += 50;
        counter++;
        document.getElementById('clicker__counter').textContent = counter;
        flag = true;
    };
})();
