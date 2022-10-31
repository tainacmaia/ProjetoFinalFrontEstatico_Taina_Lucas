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
            },6000)
        },4000)

        }
        else{
            gifcontent.classList.add("aberto")
            addgif();
            setTimeout(()=>{
                gifstart.src = "../Imgs/Villains/perfmidGIF.gif"
            },4000)
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

/**/
var contentSingle = document.querySelector('.fullvil');
var contents = contentSingle.querySelectorAll('div');
var menuButtons = document.querySelectorAll('.boss');

contents.forEach( (content) => {
  content.classList.add('hide');

});

menuButtons.forEach( (btn) => {
  btn.addEventListener('click', showContent)
});

function showContent(event) {
    var targetContent, visibleContent, menuSelected;
    visibleContent = document.querySelector('.visible');
    menuSelected = document.querySelector('.selected');
    targetContent = document.querySelector(`.content-${event.target.id}`);
    
    if ( !event.target.classList.contains('selected') ) {
      if ( menuSelected ) menuSelected.classList.remove('selected');
      
      if ( visibleContent ) {
        visibleContent.classList.add('hide');
        visibleContent.classList.remove('visible');
      }
  
      event.target.classList.add('selected');
      
      targetContent.classList.remove('hide');
      targetContent.classList.add('visible');
      
      return;
    }
    if ( event.target.classList.contains('selected') ) {
      event.target.classList.remove('selected');
      targetContent.classList.add('hide');
      targetContent.classList.remove('visible');
    }
     
  }
