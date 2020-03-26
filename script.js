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

const AddText = window.matchMedia(`(max-width:980px)`);

if (AddText.matches) {
    let text = document.getElementById("edit-text").querySelector("p");
    text.textContent = `Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem 
    nec elit.`;
}

// Пометки для себя* Код добавляет текст в блок, его минус, проверка работает не динамически, а только после обновлении страницы.