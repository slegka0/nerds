var popup = document.querySelector(".write-us");
var close_button = popup.querySelector(".close-button");
var write_us_form = popup.querySelector(".write_us_form");
var link = document.querySelector(".contacts-button");
var input_name = document.getElementById("name");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});

close_button.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

