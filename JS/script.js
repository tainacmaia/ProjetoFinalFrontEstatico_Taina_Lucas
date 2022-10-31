let time = 1000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    /*if(currentImageIndex >= max)
        currentImageIndex = 0*/   /*aqui é onde faz ficar o loopinfinito*/

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