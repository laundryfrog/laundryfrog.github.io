function openTab(tabName, elmnt) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Clear background color of previously clicked tab
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(tabName).style.display = "block";

  // Add the specific color to the button used to open the tab content
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

const RSS_URL = `https://codepen.io/picks/feed/`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
        <article>
          <img src="${el.querySelector("link").innerHTML}/image/large.png" alt="">
          <h2>
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML}
            </a>
          </h2>
        </article>
      `;
    });
    document.body.insertAdjacentHTML("beforeend", html);
  });
