// Funciones menu

var btn_shop = document.getElementById('shop_btn');

btn_shop.addEventListener("mouseover", function() {
    document.getElementsByClassName("arrow_down")[0].src="../assets/img/down_arrow_red.svg";
});

btn_shop.addEventListener("mouseout", function() {
    document.getElementsByClassName("arrow_down")[0].src="../assets/img/down_arrow.svg";
});

var btn_menu = document.getElementById('btn_menu_principal');

btn_menu.addEventListener("click", function() {
    document.getElementsByClassName("menu_movil_opciones")[0].classList.toggle("ver");
});

// Delay pop up

function animar_pop_up(){
    document.getElementsByClassName('float_message')[0].classList.toggle('ocultar');
}

setTimeout(animar_pop_up,2500);