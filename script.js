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

/* Media Query */

const SIZE = window.addEventListener("resize", function () {
    const AddText = window.matchMedia(`(max-width:980px)`);
    const AddTextTwo = window.matchMedia(`(min-width:981px)`);


    if (AddText.matches) {

        let text = document.getElementById("edit-text").querySelector("p");
        text.textContent = `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem 
    nec elit.`;
    } else if (AddTextTwo.matches) {
        let text = document.getElementById("edit-text").querySelector("p");
        text.textContent = `Duis mollis, est non commodo luctus, nisi erat porttitor ligula`;
    }
})

// Пометки для себя* Код добавляет текст в блок. 
//Пожалуйста не крутите пальцем у виска, я просто учусь :)

// function showMenu() {
//     let transform = document.getElementById("nav-header-mobile");
//     transform.addEventListener("click", function (e) {
//         e.preventDefault();
//         const ADDstyle = document.getElementById("header__nav-mobile-line");
//         ADDstyle.classList.toggle("showEffect")
//     })
// }


// const ELEM = document.getElementById("nav-header-mobile");
// const ELEManchor = document.getElementById("effect");
// ELEManchor.addEventListener("click", function (e) {
//     e.classList.toggle("showEffect");
// });

/* ПРИМЕРЫ ВЫШЕ ЭТО ПОПЫТКИ НАПИСАТЬ АНИМАЦИЮ */

const ANCHORR = document.getElementById("effect");
const SPAN = document.getElementById("nav-header-mobile")
const MenuMobileSlide = document.getElementById("hidden-mobile")
const LogoTransform = document.getElementById("logo");

function showMenu() {
    SPAN.classList.toggle("showEffect");
}

function showHidden() {
    MenuMobileSlide.classList.toggle("header__nav-mobile-flex_hidden");
}

function showLogo() {
    LogoTransform.classList.toggle("logo-transform");
}

// ANCHORR.addEventListener("click", function (e) {
//     SPAN.classList.toggle("showEffect");
// })