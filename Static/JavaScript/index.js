var click=false;
function clickText(){
    if(click){
        var dark = document.getElementById("overlay");
        document.getElementById("On").style.color='white';
        document.getElementById("it").style.color='white';
        document.getElementById("On").textContent="OFF";
        dark.style.backgroundColor="black";
        dark.style.zIndex=0;
        document.getElementById("switcher").style.textShadow="2px 2px 2px white";

    }
    else{
        var dark = document.getElementById("overlay");
        document.getElementById("On").style.color='black';
        document.getElementById("it").style.color='black';
        document.getElementById("On").textContent="ON"
        dark.style.backgroundColor="transparent";
        dark.style.zIndex=-1;
        document.getElementById("switcher").style.textShadow="2px 2px 2px black";
    }
    click=!click;
}