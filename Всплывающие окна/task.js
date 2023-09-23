let modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');
modalMain.querySelector('.modal__close').onclick = () => {
    modalMain.classList.remove('modal_active');
}

let modalSuccess = document.getElementById('modal_success');
modalMain.querySelector('.show-success').onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

modalSuccess.querySelector('.modal__close').onclick = () => {
    modalSuccess.classList.remove('modal_active');
}

modalSuccess.querySelector('.btn_success').onclick = () => {
    modalSuccess.classList.remove('modal_active');
}