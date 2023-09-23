const menus = document.getElementsByClassName('menu__link');
for (let menu of menus) {
    console.log(menu);
    menu.onclick = (e) => {
        const subMenu = e.target.nextElementSibling;
        console.log(subMenu);
        if (subMenu) {
            if (subMenu.classList.contains('menu_active')) {
                subMenu.classList.remove('menu_active');
            } else {
                subMenu.classList.add('menu_active');
            }
            return false;
        }
    }
}