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

let fireContainer = document.getElementById("fire-container");
let smogContainer = document.getElementById("smog-container");
function createParticles(fireContainer, num, leftSpacing) {
  for (let i = 0; i < num; i += 1) {
    let particle = document.createElement("div");
    particle.style.left = `calc((100% - 5em) * ${i / leftSpacing})`;
    particle.setAttribute("class", "particle");
    particle.style.animationDelay = 4 * Math.random() + "s";
    fireContainer.appendChild(particle);
  }
}

createParticles(fireContainer, 60, 60);
createParticles(smogContainer, 30, 30);