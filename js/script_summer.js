var popup = document.querySelector(".call-form-popup");
var Username = popup.querySelector("[name=Username]");
var close = popup.querySelector(".popup-close");
var form = popup.querySelector("form");
var textfield = document.querySelector(".about-call-form-action-text");

var link21 = document.querySelector(".summer-button");


  link21.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    // Username.focus();
    textfield.value="Консультация по летнему лагерю для детей";
  });


  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
      }
    }
  });