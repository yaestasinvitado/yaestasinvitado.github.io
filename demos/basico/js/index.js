$(document).ready(function(e) {
    configuraTempo();
});


function configuraTempo() {
    if ($("#clock").length) {
        $('#clock').countdown('2024/12/25', function(event) {
            var $this = $(this).html(event.strftime('' +
                '<span class="josefin tiempo box">%D</span><span class="josefin tiempo-detalle"> Días</span>' +
                '<span class="josefin tiempo box">%H</span><span class="josefin tiempo-detalle"> Hrs.</span>' +
                '<span class="josefin tiempo box">%M</span><span class="josefin tiempo-detalle"> Min.</span>' +
                '<span class="josefin tiempo box">%S</span><span class="josefin tiempo-detalle"> Seg.</span>'));
        });
    }
}
$('.cerrar').click(function() {
    $('#sticky').hide();
    return;
});