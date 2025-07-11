var menuImg = "_index"

// Load menu when document is ready
window.addEventListener("DOMContentLoaded", function(){	
	$('#menu').load('/menu.html');
});
 
function toggleMenu(menuName) {
	if (document.getElementById(menuName).style.display == "block") {
		document.getElementById(menuName).style.display = "none";
	}
	else {
		document.getElementById(menuName).style.display = "block";
	}
}

function setMenuImage(src) {
	menuImg = src;
}

function updateMenuImg(img) {
	img.onload = null;
	img.src = img.src.replace("_index", menuImg);
}