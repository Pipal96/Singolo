const MENU = document.getElementById("menu");


MENU.addEventListener("click", (event) => {

    MENU.querySelectorAll("ul > li").forEach(el => el.classList.remove("header__li_active"));

    event.target.parentElement.classList.add("header__li_active");
})