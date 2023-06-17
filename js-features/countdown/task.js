(() => {
    const date = new Date().toLocaleTimeString(); //текущее время hh:mm:ss
    let seconds = Number(date.slice(-2));
    const p = document.getElementById('timer');
    p.textContent = `00:00:${date.slice(-2)}`
    setInterval(() => {
    seconds = seconds - 1;
    if (seconds === 0) {return alert('Вы победили в конкурсе!')};
    if (seconds < 0) {return};
    if (seconds <10) {str = '00:00:' + '0' + String(seconds)}
    else {str = '00:00:' + String(seconds)};
    p.textContent = `${str}`},1000);
})()
