$(document).ready(function(e) {
    navbar_height = document.querySelector('.navbar').offsetHeight; //get the offset height
    document.body.style.paddingTop = navbar_height + 'px'; // Add the offset height to the top
});

$(".paquetes").click(function() {
    let idPaquete = $(this).attr('idPaquete');

    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }

    if (idPaquete == "1") {
        $('#basico').addClass("zoom shadow");
        $('#estandar').removeClass("zoom shadow");
        $('#platinum').removeClass("zoom shadow");
    }
    if (idPaquete == "2") {
        $('#basico').removeClass("zoom shadow");
        $('#estandar').addClass("zoom shadow");
        $('#platinum').removeClass("zoom shadow");
    }
    if (idPaquete == "3") {
        $('#basico').removeClass("zoom shadow");
        $('#estandar').removeClass("zoom shadow");
        $('#platinum').addClass("zoom shadow");
    }
});

$(function() {
    $('#whatsapp').floatingWhatsApp({
        phone: '+522871464007',
        popupMessage: 'Hola, ¿Cómo podemos ayudarte?',
        size: '50px',
        message: "",
        showPopup: true,
        showOnIE: false,
        headerTitle: '¡Ya Estás Invitado!',
        headerColor: '#9CCC65',
        backgroundColor: '#9CCC65',
        buttonImage: '<img src="js/whatsapp/img/whatsapp.webp" />'
    });
});

$('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

/* let animadoTop = document.querySelectorAll('.animadoTop');
let animadoLeft = document.querySelectorAll('.animadoLeft');
let animadoRight = document.querySelectorAll('.animadoRight');

function mostrarElementos() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animadoTop.length; i++) {
        let altura = animadoTop[i].offsetTop;
        if (altura - 500 < scrollTop) {
            animadoTop[i].style.opacity = 1;
            animadoTop[i].classList.add('mostrarTop');
        }
    }

    for (var i = 0; i < animadoLeft.length; i++) {
        let altura = animadoLeft[i].offsetTop;
        if (altura - 500 < scrollTop) {
            animadoLeft[i].style.opacity = 1;
            animadoLeft[i].classList.add('mostrarLeft');
        }
    }

    for (var i = 0; i < animadoRight.length; i++) {
        let altura = animadoRight[i].offsetTop;
        if (altura - 500 < scrollTop) {
            animadoRight[i].style.opacity = 1;
            animadoRight[i].classList.add('mostrarRight');
        }
    }
}
 */
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));