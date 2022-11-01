var menu = document.getElementById("menu")

function closeOpenMenu() {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden")
    } else {
        menu.classList.add("hidden")
    }
};