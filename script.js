const MENU = document.getElementById("menu");
const ANCHOR = document.querySelectorAll('a[href*="#"')


MENU.addEventListener("click", (event) => {

    MENU.querySelectorAll("ul > li").forEach(el => el.classList.remove("header__li_active"));

    event.target.parentElement.classList.add("header__li_active");
})

for (let anchors of ANCHOR) {
    anchors.addEventListener("click", function (event) {
        event.preventDefault();
        const BLOCKid = anchors.getAttribute('href');
        document.querySelector("" + BLOCKid).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}