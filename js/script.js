const modeSwitch = document.querySelector(".mode")

modeSwitch.addEventListener('click', modeToogle);

function modeToogle(e) {
    if (e.target.classList.contains("bi-brightness-high-fill")) {
        e.target.classList.remove("bi-brightness-high-fill");
        e.target.classList.add("bi-moon-fill");
        document.querySelector("body").classList.add("dark");
    } else {
        e.target.classList.remove("bi-moon-fill");
        e.target.classList.add("bi-brightness-high-fill");
        document.querySelector("body").classList.remove("dark");
    }
}