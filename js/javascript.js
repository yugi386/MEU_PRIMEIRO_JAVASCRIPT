/*--------------------------------------------------------------------------------------------ESTE SCRIPT CONTROLA A ROLAGEM DAS FOTOS NO ARQUIVO HTML E O DESTAQUE DA FOTO MASTER--------------------------------------------------------------------------------------------MEU PRIMEIRO JAVASCRIPTAUTOR: YUGIDATA: 20/06/2012--------------------------------------------------------------------------------------------*/var posic = 1;function browseGallery(tipo) {	if (tipo == 1) {		posic++;	} else {		posic--;		}		if (posic > 9) {		alert("Você está no final da galeria de fotos!!!");		posic = 9;	}		if (posic < 1) {		alert("Você está no começo da galeria de fotos!!!");		posic = 1;	}			var ct = 0;	for (ct=0;ct<4;ct++){		document.getElementById("photo" + (ct + 1)).src="img/" + (posic + ct) + ".jpg";	}}// ******************************************************************************************function showPicture(tipo) {	document.getElementById("master").src="img/" + (posic + tipo) + ".jpg";}