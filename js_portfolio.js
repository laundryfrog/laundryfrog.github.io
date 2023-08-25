function openPage(pageName, elmnt) {
  // Hide all elements with class="content-page" by default */
  var i, pagecontent, pagelinks;
  pagecontent = document.getElementsByClassName("content-page");
  for (i = 0; i < pagecontent.length; i++) {
    pagecontent[i].style.display = "none";
  }

  // Clear background color of previously clicked page button
  pagelinks = document.getElementsByClassName("page-link");
  for (i = 0; i < pagelinks.length; i++) {
    pagelinks[i].style.backgroundColor = "";
  }

  // Show the specific page content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the page content
  elmnt.style.backgroundColor = getComputedStyle(elmnt).getPropertyValue("--button-selected");
}

function openMenu(menuName) {
	if (document.getElementById(menuName).style.display == "block") {
		document.getElementById(menuName).style.display = "none";
	}
	else {
		document.getElementById(menuName).style.display = "block";
	}
}

