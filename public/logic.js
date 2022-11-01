var menu = document.getElementById("menu")

function closeOpenMenu() {
    if (menu.hidden === false) {
        menu.hidden = true;
    } else {
        menu.hidden = false;
    }
};