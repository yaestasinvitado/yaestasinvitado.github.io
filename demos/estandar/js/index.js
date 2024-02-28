$(document).ready(function(e) {
    configuraTempo();
});


function configuraTempo() {
    if ($("#clock_01").length) {
        $('#clock_01').countdown('2024/12/25', function(event) {
            var $this = $(this).html(event.strftime('' +
                '<span class="josefin tiempo box text-dark">%D</span><span class="josefin tiempo-detalle text-dark"> Días</span>' +
                '<span class="josefin tiempo box text-dark">%H</span><span class="josefin tiempo-detalle text-dark"> Hrs.</span>' +
                '<span class="josefin tiempo box text-dark">%M</span><span class="josefin tiempo-detalle text-dark"> Min.</span>' +
                '<span class="josefin tiempo box text-dark">%S</span><span class="josefin tiempo-detalle text-dark"> Seg.</span>'));
        });
    }
    if ($("#clock_02").length) {
        $('#clock_02').countdown('2022/12/25', function(event) {
            var $this = $(this).html(event.strftime('' +
                '<span class="josefin tiempo box text-dark">%D</span><span class="josefin tiempo-detalle text-dark"> Días</span>' +
                '<span class="josefin tiempo box text-dark">%H</span><span class="josefin tiempo-detalle text-dark"> Hrs.</span>' +
                '<span class="josefin tiempo box text-dark">%M</span><span class="josefin tiempo-detalle text-dark"> Min.</span>' +
                '<span class="josefin tiempo box text-dark">%S</span><span class="josefin tiempo-detalle text-dark"> Seg.</span>'));
        });
    }
    if ($("#clock_03").length) {
        $('#clock_03').countdown('2022/12/25', function(event) {
            var $this = $(this).html(event.strftime('' +
                '<span class="josefin tiempo box text-dark">%D</span><span class="josefin tiempo-detalle text-dark"> Días</span>' +
                '<span class="josefin tiempo box text-dark">%H</span><span class="josefin tiempo-detalle text-dark"> Hrs.</span>' +
                '<span class="josefin tiempo box text-dark">%M</span><span class="josefin tiempo-detalle text-dark"> Min.</span>' +
                '<span class="josefin tiempo box text-dark">%S</span><span class="josefin tiempo-detalle text-dark"> Seg.</span>'));
        });
    }
}
$('.cerrar').click(function() {
    $('#sticky').hide();
    return;
});