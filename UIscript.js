var openTab=function (tabId) {
	var tab = document.querySelectorAll(".content");
	for (var i = 0; i<= tab.length - 1; i++) {
		tab[i].style.display="none";
	}
	document.getElementById(tabId).style.display = "block"
	
}