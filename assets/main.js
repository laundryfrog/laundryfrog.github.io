// Load menu when document is ready
  $(document).ready(function () {
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