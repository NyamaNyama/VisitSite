

var click=false;
function clickText(){
    if(click){
        document.getElementById("Name").style.color='white';
        document.getElementById("On").textContent="OFF";
        overlay.style.backgroundImage= "url(backgrounds/pink.jpg";

    }
    else{
        document.getElementById("Name").style.color='black';
        document.getElementById("On").textContent="ON"
        overlay.style.backgroundImage= "url(backgrounds/pink.jpg";
    }
    click=!click;x
}