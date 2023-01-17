let headerHeight = document.querySelector(".start").offsetHeight - document.querySelector(".navigation").offsetHeight
let nav = document.querySelector(".navigation")
let button = document.getElementById("button")

window.onscroll = () => {
    if(window.scrollY > headerHeight) {
        nav.style.backgroundColor = "white"
        nav.style.transition = "1s"
        button.style.backgroundColor = "green"
        button.style.transition = "1s"

    } else {
        nav.style.backgroundColor = "#ffc017"
        nav.style.transition = "1s"
        button.style.backgroundColor = "black"
        button.style.transition = "1s"
        
    }
}

let lettera = document.querySelectorAll("svg g[stroke-linecap='butt']")

let letteraAnimation = setInterval(() => {
    let random = Math.floor(Math.random()* lettera.length)
    let letteraRandom = lettera[random]
    if(letteraRandom.getAttribute("opacity") == 1) {
        letteraRandom.style.opacity = 0
    } else {
        letteraRandom.style.opacity = 1
    }
}, 100)

