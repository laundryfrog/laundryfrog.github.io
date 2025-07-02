// Load menu when document is ready
  $(document).ready(function () {
    $('#menu').load('menu.html');
  });
  
function setOpenPage(elmnt) {
  // Clear background color of all page buttons
  pagelinks = document.getElementsByClassName("page-link");
  for (i = 0; i < pagelinks.length; i++) {
    pagelinks[i].style.backgroundColor = "";
  }

  // Set 'selected' color of chosen page button
  elmnt.style.backgroundColor = getComputedStyle(elmnt).getPropertyValue("--light");
}

function toggleMenu(menuName) {
	if (document.getElementById(menuName).style.display == "block") {
		document.getElementById(menuName).style.display = "none";
	}
	else {
		document.getElementById(menuName).style.display = "block";
	}
}