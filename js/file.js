console.log("this is js file");
const navbottom = document.querySelector(".navbottom");
const openmenu = document.querySelector(".openmenu");
const closemenu = document.querySelector(".closemenu");

openmenu.addEventListener("click", show);
closemenu.addEventListener("click", close);

function show(){
    navbottom.style.display = "flex";
    navbottom.style.top = "0"
}

function close(){
    navbottom.style.top = "-55%"
}