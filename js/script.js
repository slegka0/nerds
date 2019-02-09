var popup = document.querySelector(".write-us");
var close_button = popup.querySelector(".close-button");
var write_us_form = popup.querySelector(".write-us-form");
var link = document.querySelector(".contacts-button");
var input_name = popup.querySelector(".write-us-name");
var input_email = popup.querySelector(".write-us-email");
var input_text = popup.querySelector(".text-form");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
});

close_button.addEventListener("click", function (evt) {
	evt.preventDefault();
  popup.classList.remove("modal-show");
  input_name.classList.remove("modal-error");
  input_email.classList.remove("modal-error");
  input_text.classList.remove("modal-error");
  popup.classList.remove("modal-error-shake");
});

write_us_form.addEventListener("submit", function (evt) {
  input_name.classList.remove("modal-error");
	if (!input_name.value) {
    evt.preventDefault();
    input_name.classList.remove("modal-error");
    input_name.classList.add("modal-error");
    popup.classList.add("modal-error-shake");
  }
});

write_us_form.addEventListener("submit", function (evt) {
  input_email.classList.remove("modal-error");
	if (!input_email.value) {
    evt.preventDefault();
    input_email.classList.remove("modal-error");
    input_email.classList.add("modal-error");
    popup.classList.add("modal-error-shake");
  }
});

write_us_form.addEventListener("submit", function (evt) {
  input_text.classList.remove("modal-error");
	if (!input_text.value) {
    evt.preventDefault();
    input_text.classList.remove("modal-error");
    input_text.classList.add("modal-error");
    popup.classList.add("modal-error-shake");
  }
});

