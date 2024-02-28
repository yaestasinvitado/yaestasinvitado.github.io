cargaGaleria();
baguetteBox.run('.tz-gallery');

function cargaGaleria() {
	let PATH_GALLERY = "https://marketingtux.com/img_galeria/"
	let PATH_COMPRESS = "https://marketingtux.com/img_galeria/comprimido/";
	let galeria = '';
	//var modal = new bootstrap.Modal(document.getElementById("staticBackdrop"), {});
	//modal.show();

	$('#galeria').empty();
	$.getJSON("js/directorio.json", function (data) {
		let total_registros = data.length;

		$.each(data, function (i, item) {

			let url = PATH_GALLERY + data[i].dir;
			let url_compress = PATH_COMPRESS + data[i].dir;
			getHeightAndWidthFromDataUrl(url_compress).then(dimensions => {
				//$('.name').text("Cargando... [ " + (i + 1) + " de " + total_registros + " ]");

				console.log(dimensions.width + ' x ' + dimensions.height);

				if (total_registros == (i + 1))
					$('#cerrar').show();

				if (dimensions.aspect > 1) {
					galeria += '<div class="col-sm-12 col-md-4 position-relative">';
					galeria += '<a class="lightbox"';
					galeria += 'href="' + url + '">';
					galeria += '<img style="display: block; margin: 1em 0; max-width: calc(100% - 2em);" src="' + url_compress + '"';
					galeria += 'alt="' + data[i].dir.split('.')[0] + '">';
					galeria += '</a>';
					galeria += '<a class="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x" href="' + url + '" download="' + url + '">Descargar</a>'
					galeria += '</div>';

				} else if (dimensions.aspect < 1) {
					galeria += '<div class="col-sm-6 col-md-4">';
					galeria += '<a class="lightbox"';
					galeria += 'href="' + url + '">';
					galeria += '<img style="display: block; margin: 1em 0; max-width: calc(100% - 2em);" src="' + url_compress + '"';
					galeria += 'alt="' + data[i].dir.split('.')[0] + '">';
					galeria += '</a>';
					galeria += '<a class="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x" href="' + url + '" download="' + url + '">Descargar</a>'
					galeria += '</div>';
				} else {
					galeria += '<div class="col-sm-12 col-md-8">';
					galeria += '<a class="lightbox"';
					galeria += 'href="' + url + '">';
					galeria += '<img style="display: block; margin: 1em 0; max-width: calc(100% - 2em);" src="' + url_compress + '"';
					galeria += 'alt="' + data[i].dir.split('.')[0] + '">';
					galeria += '</a>';
					galeria += '<a class="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x" href="' + url + '" download="' + url + '">Descargar</a>'
					galeria += '</div>';
				}
				$('#galeria').html(galeria);
			});
		});

	}).fail(function (err) {
		console.log(err.statusText);
	});
}

const getHeightAndWidthFromDataUrl = dataURL => new Promise(resolve => {
	const img = new Image()
	img.onload = () => {
		var aspectRatio = img.width / img.height;
		jQuery(this).data("aspect-ratio", aspectRatio);
		resolve({
			height: img.height,
			width: img.width,
			aspect: aspectRatio
		})
	}
	img.src = dataURL
})