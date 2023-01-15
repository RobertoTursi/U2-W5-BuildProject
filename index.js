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