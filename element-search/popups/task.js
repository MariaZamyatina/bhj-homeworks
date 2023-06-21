window.modal_main.classList.add("modal_active");
const elements_close = Array.from(document.querySelectorAll('div.modal__close_times')),
modal = document.querySelector("div.modal a.btn_danger");

(() => {
elements_close.forEach((element) => {
    element.onclick = () => {
        element.closest("div.modal").classList.remove("modal_active");
    };
});
})();

modal.onclick = () => {
    document.getElementById("modal_main").classList.remove("modal_active");
    document.getElementById("modal_success").classList.add("modal_active");
}


