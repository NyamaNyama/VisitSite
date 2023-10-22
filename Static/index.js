
var click=true;
function clickText(){
    if(click){
        document.getElementById("Name").style.color='white';
        document.getElementById("On").textContent="OFF"
    }
    else{
        document.getElementById("Name").style.color='black';
        document.getElementById("On").textContent="ON"
    }
    click=!click;
}