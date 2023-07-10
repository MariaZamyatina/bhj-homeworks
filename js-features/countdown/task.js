(() => {
    let seconds = Number(document.getElementById('timer').textContent);
    const p = document.getElementById('timer');
    p.textContent = `00:00:${seconds}`;

    let timerId = setInterval(() => {
    seconds = seconds - 1;
    if (seconds < 0) {
        clearTimeout(timerId);
        return alert('Вы победили в конкурсе!')
    };
    str = (seconds < 10) ? `00:00:0${seconds}` : `00:00:${seconds}`;
    p.textContent = `${str}`},1000);
})()
