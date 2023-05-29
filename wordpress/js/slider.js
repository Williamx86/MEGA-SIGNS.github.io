// Ponemos a punto el slider

var slides = document.getElementsByClassName("slide");
var posicion = 0;

window.onload = function() {
    slides[0].classList.add("slide_show");
};

function adelante(){
    if(posicion >= slides.length-1){
        slides[posicion].classList.remove("slide_show");
        posicion = 0;
        slides[posicion].classList.add("slide_show");
    }else{
        slides[posicion].classList.remove("slide_show");
        posicion += 1;
        slides[posicion].classList.add("slide_show");
    }
}

function atras(){
    if(posicion > 0){
        slides[posicion].classList.remove("slide_show");
        posicion -= 1;
        slides[posicion].classList.add("slide_show");
    }else{
        slides[posicion].classList.remove("slide_show");
        posicion = slides.length - 1;
        slides[posicion].classList.add("slide_show");
    }
}
