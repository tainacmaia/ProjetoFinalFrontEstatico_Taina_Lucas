let gifcontent = document.querySelector("#oldscroll");
let gifstart = document.createElement("IMG");

gifstart.width = 1200;

var buttons = document.querySelectorAll(".boss");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(gifcontent.classList.contains("aberto")){
            gifstart.src = "../Imgs/Villains/perfendGIF.gif"
        setTimeout(()=>{
            gifstart.src = "../Imgs/Villains/perfstartGIF.gif"
            setTimeout(()=>{
                gifstart.src = "../Imgs/Villains/perfmidGIF.gif"
            },5130)
        },3900)

        }
        else{
            gifcontent.classList.add("aberto")
            addgif();
            setTimeout(()=>{
                gifstart.src = "../Imgs/Villains/perfmidGIF.gif"
            },5130)
        }
    });
})

function addgif(){
    gifstart.src = "../Imgs/Villains/perfstartGIF.gif";
    gifcontent.appendChild(gifstart);
}

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
        // setTimeout(()=>{
        //     gifstart.src = "../Imgs/Villains/perfmidGIF.gif"
        // },5000)
    }
}

let time = 1000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider div")
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

window.addEventListener("click", start)