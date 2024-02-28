import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyA1-MG3MlQQD5fc0uHKGLRMmiPhyZiWFaI",
    authDomain: "wedding-e3818.firebaseapp.com",
    projectId: "wedding-e3818",
    storageBucket: "wedding-e3818.appspot.com",
    messagingSenderId: "1022512748956",
    appId: "1:1022512748956:web:69e363452a6db653679059"
};

let confirmacion = 0;
let mensaje = '';
let idInvitado = '';
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function consultaInvitado() {

        try {
            let invitados = [];
            idInvitado = '67P5HJCIf7SvlTfrJYw6';
            var id = '67P5HJCIf7SvlTfrJYw6';
            const docRef = doc(db, "invitados", id);
            const querySnapshot = await getDoc(docRef);

            if (querySnapshot.exists()) {
                invitados = querySnapshot.data();
                var html = '';
                html += '<h3 class="acompañantes lato">' + invitados.nombre + '</h3> ';
                confirmacion = invitados.confirmado;
                mensaje = invitados.mensaje
                invitados.acompanantes.forEach((ac) => {
                    html += '<h5 class="acompañantes lato">' + ac.nombreAcompanante + '</h5>';
                });
                if (invitados.tickets == 1) {
                    html += '<h5 class="acompañantes lato"><small>(PERSONAL)</small></h5> ';
                } else {
                    html += '<h5 class="noscasamos lato"><small>(' + invitados.tickets + ' INVITADOS)</small></h5> ';
                }
                $('#listaInvitados').html(html);
                return true;
            } else {
                return false;
            }
        } catch { return false; }
}

$(document).ready(async function() {
    if (await consultaInvitado()) {
        configuraTempo();
        configuraConfirmacion();
        generaQR();
    } else {
        window.open('https://yaestasinvitado.com', '_self');
    }

    llenaSwiper();

    var swiper_1 = new Swiper(".swiper_01", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        freeMode: true,
        zoom: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });

    var swiper_2 = new Swiper(".swiper_02", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        freeMode: true,
        zoom: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });

    var swiper_3 = new Swiper(".swiper_03", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        freeMode: true,
        zoom: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });

    var swiper_4 = new Swiper(".swiper_04", {
        grabCursor: true,
        loop: true,
        freeMode: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });
});

function configuraConfirmacion() {
    if (confirmacion == 1) {
        $('#checkConfirmar').attr("checked", true);
        $('#enviar').attr("disabled", true);
        $('#txtMensaje').val(mensaje);
        $('#txtMensaje').attr("disabled", true);
    }
    if (confirmacion == 0) {
        $('#checkDeclinar').attr("checked", true);
        $('#txtMensaje').val(mensaje);
        $('#txtMensaje').attr("disabled", true);
    }


}

function generaQR() {
    $('#qrcode').empty();
    $('#qrcode').css({
        'width': "100",
        'height': "100"
    })

    var res = $('#qrcode').qrcode({ width: "100", height: "100", text: idInvitado });
    var asda = res;
}

$(document).on("click", "#enviar", async function(event) {
    try {
        var check = -1;
        if ($('#checkConfirmar')[0].checked) {
            check = 1;
        }

        if ($('#checkDeclinar')[0].checked) {
            check = 0;
        }

        if (check != -1) {
            const invitado = doc(db, "invitados", idInvitado);
            const res = updateDoc(invitado, {
                confirmado: check,
                mensaje: $('#txtMensaje').val()
            });

            var asda = res;

            if (check == 1) {
                $('#checkConfirmar').attr("checked", true);
                $('#checkConfirmar').attr("disabled", true);
                $('#enviar').attr("disabled", true);
            }
            if (check == 0) {
                $('#checkDeclinar').attr("checked", true);
                $('#checkDeclinar').attr("disabled", true);
            }

            $('#txtMensaje').attr("disabled", true);
        }
    } catch {
        console.log('')
    }
});

function configuraTempo() {
    if ($("#clock_01").length) {
        $('#clock_01').countdown('2023/10/29 18:00', function(event) {
            var $this = $(this).html(event.strftime('' +
                '<span class="josefin tiempo box text-danger">%D</span><span class="josefin tiempo-detalle text-danger"> días </span>' +
                '<span class="josefin tiempo box text-danger">%H</span><span class="josefin tiempo-detalle text-danger"> hrs. </span>' +
                '<span class="josefin tiempo box text-danger">%M</span><span class="josefin tiempo-detalle text-danger"> min. </span>' +
                '<span class="josefin tiempo box text-danger">%S</span><span class="josefin tiempo-detalle text-danger"> seg. </span>'));
        });
    }
}
$('.cerrar').click(function() {
    $('#sticky').hide();
    return;
});


function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
            query_string[key] = decodeURIComponent(value);
            // If second entry with this name
        } else if (typeof query_string[key] === "string") {
            var arr = [query_string[key], decodeURIComponent(value)];
            query_string[key] = arr;
            // If third or later entry with this name
        } else {
            query_string[key].push(decodeURIComponent(value));
        }
    }
    return query_string;
}

$('#liverpool_redirect').click(function() {
    window.open('https://mesaderegalos.liverpool.com.mx/milistaderegalos/50732303');
});

$('#amazon_redirect').click(function() {
    window.open('https://www.amazon.com.mx/wedding/liliana-ramirez-garc%C3%ADa-juan-carlos-cansino-mart%C3%ADnez-tuxtepec-oaxaca-october-2022/registry/1UI414I3C2DYQ');
});

function llenaSwiper() {
    let section_one = [
        { 'url': 'img/save_the_date/section_one_01.jpg' },
        { 'url': 'img/save_the_date/section_one_02.jpg' },
        { 'url': 'img/save_the_date/section_one_05.jpg' },
        { 'url': 'img/save_the_date/section_one_06.jpg' },
        { 'url': 'img/save_the_date/section_one_07.jpg' },
        { 'url': 'img/save_the_date/section_one_08.jpg' },
        { 'url': 'img/save_the_date/section_one_09.jpg' },
        { 'url': 'img/save_the_date/section_one_10.jpg' },
        { 'url': 'img/save_the_date/section_one_11.jpg' },
        { 'url': 'img/save_the_date/section_one_12.jpg' }
    ];

    let section_two = [
        { 'url': 'img/save_the_date/section_two_01.jpg' },
        { 'url': 'img/save_the_date/section_two_02.jpg' },
        { 'url': 'img/save_the_date/section_two_03.jpg' },
        { 'url': 'img/save_the_date/section_two_04.jpg' },
        { 'url': 'img/save_the_date/section_two_06.jpg' },
        { 'url': 'img/save_the_date/section_two_07.jpg' },
        { 'url': 'img/save_the_date/section_two_08.jpg' },
        { 'url': 'img/save_the_date/section_two_09.jpg' },
        { 'url': 'img/save_the_date/section_two_10.jpg' },
        { 'url': 'img/save_the_date/section_two_11.jpg' },
        { 'url': 'img/save_the_date/section_two_12.jpg' },
        { 'url': 'img/save_the_date/section_two_13.jpg' }
    ];

    let section_three = [
        { 'url': 'img/save_the_date/section_three_01.jpg' },
        { 'url': 'img/save_the_date/section_three_02.jpg' },
        { 'url': 'img/save_the_date/section_three_06.jpg' },
        { 'url': 'img/save_the_date/section_three_07.jpg' },
        { 'url': 'img/save_the_date/section_three_08.jpg' },
        { 'url': 'img/save_the_date/section_three_09.jpg' },
        { 'url': 'img/save_the_date/section_three_10.jpg' },
        { 'url': 'img/save_the_date/section_three_11.jpg' },
        { 'url': 'img/save_the_date/section_three_12.jpg' },
        { 'url': 'img/save_the_date/section_three_13.jpg' }
    ];

    let html = '';
    section_one.forEach((section) => {
        html += '<div class="swiper-slide background-none">';
        html += '<div class="card background-none text-start border-0" style="width: 20rem;">';
        html += '<img src="' + section.url + '" class="card-img-top">';
        html += '</div>';
        html += '</div>';
    });
    $('#swiper_fill_01').html(html);

    html = '';
    section_two.forEach((section) => {
        html += '<div class="swiper-slide background-none">';
        html += '<div class="card background-none text-start border-0" style="width: 20rem;">';
        html += '<img src="' + section.url + '" class="card-img-top">';
        html += '</div>';
        html += '</div>';
    });
    $('#swiper_fill_02').html(html);

    html = '';
    section_three.forEach((section) => {
        html += '<div class="swiper-slide background-none">';
        html += '<div class="card background-none text-start border-0" style="width: 20rem;">';
        html += '<img src="' + section.url + '" class="card-img-top">';
        html += '</div>';
        html += '</div>';
    });
    $('#swiper_fill_03').html(html);
    llenaGaleria();
}

function llenaGaleria() {
    let section_four = [
        { 'url': 'img/save_the_date/section_one_01.jpg' },
        { 'url': 'img/save_the_date/section_one_02.jpg' },
        { 'url': 'img/save_the_date/section_one_03.jpg' },
        { 'url': 'img/save_the_date/section_one_04.jpg' },
        { 'url': 'img/save_the_date/section_one_05.jpg' },
        { 'url': 'img/save_the_date/section_one_06.jpg' },
        { 'url': 'img/save_the_date/section_one_07.jpg' },
        { 'url': 'img/save_the_date/section_one_08.jpg' },
        { 'url': 'img/save_the_date/section_one_09.jpg' },
        { 'url': 'img/save_the_date/section_one_11.jpg' },
        { 'url': 'img/save_the_date/section_one_12.jpg' },
        { 'url': 'img/save_the_date/section_two_01.jpg' },
        { 'url': 'img/save_the_date/section_two_02.jpg' },
        { 'url': 'img/save_the_date/section_two_03.jpg' },
        { 'url': 'img/save_the_date/section_two_04.jpg' },
        { 'url': 'img/save_the_date/section_two_05.jpg' },
        { 'url': 'img/save_the_date/section_two_06.jpg' },
        { 'url': 'img/save_the_date/section_two_07.jpg' },
        { 'url': 'img/save_the_date/section_two_08.jpg' },
        { 'url': 'img/save_the_date/section_two_09.jpg' },
        { 'url': 'img/save_the_date/section_two_10.jpg' },
        { 'url': 'img/save_the_date/section_two_11.jpg' },
        { 'url': 'img/save_the_date/section_two_12.jpg' },
        { 'url': 'img/save_the_date/section_two_13.jpg' },
        { 'url': 'img/save_the_date/section_three_01.jpg' },
        { 'url': 'img/save_the_date/section_three_02.jpg' },
        { 'url': 'img/save_the_date/section_three_03.jpg' },
        { 'url': 'img/save_the_date/section_three_04.jpg' },
        { 'url': 'img/save_the_date/section_three_05.jpg' },
        { 'url': 'img/save_the_date/section_three_06.jpg' },
        { 'url': 'img/save_the_date/section_three_07.jpg' },
        { 'url': 'img/save_the_date/section_three_08.jpg' },
        { 'url': 'img/save_the_date/section_three_09.jpg' },
        { 'url': 'img/save_the_date/section_three_10.jpg' },
        { 'url': 'img/save_the_date/section_three_11.jpg' },
        { 'url': 'img/save_the_date/section_three_12.jpg' },
        { 'url': 'img/save_the_date/section_three_13.jpg' }
    ];

    let galeria = ''
    section_four.forEach((section) => {
        galeria += '<div class="swiper-slide background-none">';
        galeria += '<img src="' + section.url + '" class="w-100 shadow-1-strong rounded mb-4 yourFluidImage">';
        galeria += '</div>';
    });
    $('#swiper_fill_04').html(galeria);
}