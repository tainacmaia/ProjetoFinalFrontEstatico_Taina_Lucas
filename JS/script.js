let time = 500,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start)
// btn.addEventListener('click', start)