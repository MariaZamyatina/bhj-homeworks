(() => {
    const date = new Date().toLocaleTimeString(); //текущее время hh:mm:ss
    let seconds = Number(date.slice(-2));
    const p = document.getElementById('timer');
    p.textContent = `00:00:${date.slice(-2)}`;

    let timerId = setInterval(() => {
    seconds = seconds - 1;
    console.log(seconds);
    if (seconds === 0) {
        clearTimeout(timerId);
        return alert('Вы победили в конкурсе!')};
    if (seconds < 10) {
        str = '00:00:' + '0' + String(seconds)}
    else {
        str = '00:00:' + String(seconds)};
    p.textContent = `${str}`},1000);
})()
