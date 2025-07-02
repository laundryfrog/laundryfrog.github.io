// Load menu when document is ready
  $(document).ready(function () {
    $('#menu').load('menu.html');
  });
  
function openPage(pageName, elmnt) {
  // Clear background color of previously clicked page button
  pagelinks = document.getElementsByClassName("page-link");
  for (i = 0; i < pagelinks.length; i++) {
    pagelinks[i].style.backgroundColor = "";
  }

  // Add the specific color to the button used to open the page content
  elmnt.style.backgroundColor = getComputedStyle(elmnt).getPropertyValue("--light");
}