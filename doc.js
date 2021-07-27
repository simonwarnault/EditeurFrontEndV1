

let button1 = document.getElementById('bold');
let button2 = document.getElementById('italic');
let maxChar = 200;
let barProgress = document.getElementById('myBar');
let liveCoding = document.getElementById('liveCoding');
let counter = document.getElementById('counter');
let area = document.getElementById('textarea');
counter.innerHTML = maxChar;  

area.onkeyup = area.onkeypress = function (){
    
    liveCoding.innerHTML = this.value;
    let compteur = liveCoding.textContent.length;
    let decompte = maxChar - compteur ;
    counter.innerHTML = decompte;  

    if(decompte==0){
        area.setAttribute('maxlength', area.value.length);
    }
    else {
        area.setAttribute('maxlength',"");
    }
    let progress_percent = 100*compteur/maxChar;
    document.getElementById("myBar").style.width = progress_percent+'%';

    if(progress_percent < 25) {
        document.getElementById("myBar").style.backgroundColor = "green";
    }
    if(progress_percent >= 25) {
        document.getElementById("myBar").style.backgroundColor = "yellow";
    }
    if(progress_percent >= 50) {
        document.getElementById("myBar").style.backgroundColor = "orange";
    }
    if(progress_percent >= 75) {
    document.getElementById("myBar").style.backgroundColor = "red";
}
}
function bold(){
    area.value +="<b></b>";
};

function italic(){
    area.value +="<i></i>";
};

area.onfocus = () => {
    img.style.visibility="visible";
}
area.onblur = () => {
    img.style.visibility="hidden";
}