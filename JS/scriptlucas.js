let time = 1000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {
    images.add(".//../Imgs/Villains/perfstartGIF.gif")
    time = 5000,
    images.remove(".//../Imgs/Villains/perfstartGIF.gif")
    images.add("../Imgs/Villains/perfmidGIF.gif")
    if(currentImageIndex >= max)
    currentImageIndex = 0*/   /*aqui é onde faz ficar o loopinfinito*/
    images.remove("../Imgs/Villains/perfmidGIF.gif")
    images.add("../Imgs/Villains/perfendGIF.gif")
    time = 4000,
    images.remove("../Imgs/Villains/perfendGIF.gif")
}

function start() {
    setInterval(() => {
        // troca de imagem
        nextImage()
    }, time)   
}

window.addEventListener("click", start)

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}