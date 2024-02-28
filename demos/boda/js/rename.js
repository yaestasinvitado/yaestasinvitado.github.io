import { readdirSync, rename, writeFileSync, open, appendFile } from "fs";
import { join, extname, basename } from "path";

/*
import {  fs  } from  "../node_modules/fs";
import {  path  } from  "../node_modules/path/path.js";
 */

const folderPath = "D:\\Fotos Boda 29102022\\Rename";


// read all files in the directory
let filesArr = readdirSync(folderPath).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));


// Loop through array and rename all files 


open('directorio.json', 'w', function (err, file) {
	if (err) throw err;
	console.log('Se crea archivo...');
});

appendFile('directorio.json', '[', function (err) {
	if (err) throw err;
});

filesArr.forEach((file, index) => {
	let fullPath = join(folderPath, file);
	let fileExtension = extname(file);
	let fileName = basename(file, fileExtension);

	let newFileName = "Nuestra_Boda_Lili_Juan_" + (index + 1) + fileExtension;


	try {
		console.log(newFileName);
		rename(fullPath, join(folderPath, newFileName), function(err){
			if (err) throw err;

			var direcciones = {
				"dir": newFileName
			}
	
			appendFile('directorio.json', JSON.stringify(direcciones) + ',', function (err) {
				if (err) throw err;
				console.log('Se renombra archivo y se guarda la ruta: ' + JSON.stringify(direcciones));
			});
		});



	} catch (error) {
		console.error(error)
	}
});


appendFile('directorio.json', ']', function (err) {
	if (err) throw err;
	console.log('Termina proceso...');
});
