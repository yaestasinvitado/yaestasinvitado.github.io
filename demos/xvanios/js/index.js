$(document).ready(function (e) {
    configuraTempo();
    generaQR();
});

var music = document.getElementById('music-button');
var controlButton = document.getElementById('play-pause');

function musicPlay() {
    if (music.paused) {
        music.play();
        controlButton.className = "pause";
    } else {
        music.pause();
        controlButton.className = "play";
    }
}

controlButton.addEventListener("click", musicPlay);
music.addEventListener("ended", function () {
    controlButton.className = "play";
});

function musicPlay() {
    var music = document.getElementsById("music-button");
    return music.paused ? music.play() : music.pause();
}

var isPlaying = false;

function musicPlay() {
    return music.paused ? music.play() : music.pause();
}
music.onplaying = function () {
    isPlaying = true;
};
music.onpause = function () {
    isPlaying = false;
}


window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
});

function configuraTempo() {
    if ($("#clock_01").length) {
        $('#clock_01').countdown('2023/12/25', function (event) {
            var $this = $(this).html(event.strftime('' +
                '<span class="josefin rem-3 box text-white sombras">%D</span><span class="josefin rem-0 text-white sombras"> Días</span>' +
                '<span class="josefin rem-3 box text-white sombras">%H</span><span class="josefin rem-0 text-white sombras"> Hrs.</span>' +
                '<span class="josefin rem-3 box text-white sombras">%M</span><span class="josefin rem-0 text-white sombras"> Min.</span>' +
                '<span class="josefin rem-3 box text-white sombras">%S</span><span class="josefin rem-0 text-white sombras"> Seg.</span>'));
        });
    }
}

function generaQR() {
    $('#qrcode').empty();
    $('#qrcode').css({
        'width': "100",
        'height': "100"
    })

    var res = $('#qrcode').qrcode({ width: "100", height: "100", text: "https://www.yaestasinvitado.com/" });
    var asda = res;
}


const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

$('.cerrar').click(function() {
    $('#sticky').hide();
    return;
});