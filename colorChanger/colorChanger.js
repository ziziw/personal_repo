var button = document.querySelector("button");

button.addEventListener("click", function(){
	if (document.body.style.backgroundColor !== "pink") {
		document.body.style.backgroundColor = "pink";
	} else {
		document.body.style.backgroundColor = "white";
	}
});