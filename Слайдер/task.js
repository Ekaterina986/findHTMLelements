// Управление слайдером
function next() {
    const actItem = getActive();
    let nextItem = actItem.nextElementSibling
    if (!nextItem) {
        nextItem = getFirst();
    }
    deactivateEl(actItem);
    activateEl(nextItem);
}
function prev() {
    const actItem = getActive();
    let prevItem = actItem.previousElementSibling
    if (!prevItem) {
        prevItem = getLast();
    }
    deactivateEl(actItem);
    activateEl(prevItem);
}
function getActive() {
    const list = document.getElementsByClassName('slider__item_active');
    if (list.length) {
        return list[0];
    }
    return getFirst();
}
function getFirst() {
    const listAll = document.getElementsByClassName('slider__item');
    if (listAll.length) {
        return listAll[0];
    }
    throw new Error('Слайд не найден');
}
function getLast() {
    const listAll = document.getElementsByClassName('slider__item');
    if (listAll.length) {
        return listAll[listAll.length - 1];
    }
    throw new Error('Слайд не найден');
}
function activateEl(el) {
    el.classList.add('slider__item_active');
}
function deactivateEl(el) {
    el.classList.remove('slider__item_active');
}

// Регистрация обработчиков
const elPrevButton = document.getElementsByClassName('slider__arrow_prev')[0]
elPrevButton.onclick = prev;
const elNextButton = document.getElementsByClassName('slider__arrow_next')[0]
elNextButton.onclick = next;