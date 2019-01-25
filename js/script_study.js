var link1 = document.querySelector(".city-button-m");
var link2 = document.querySelector(".city-button-b");
var link3 = document.querySelector(".city-button-l");
var link4 = document.querySelector(".city-button-s");
var link5 = document.querySelector(".city-button-n");
var link6 = document.querySelector(".city-button-o");
var link7 = document.querySelector(".city-button-w");
var popup = document.querySelector(".call-form-popup");
var Username = popup.querySelector("[name=Username]");
var close = popup.querySelector(".popup-close");
var form = popup.querySelector("form");
var textfield = document.querySelector(".about-call-form-action-text");

  link1.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    // Username.focus();
    textfield.value="Хочу учиться в Miami Beach";
  });

  link2.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    // Username.focus();
    textfield.value="Хочу учиться в Boston";
  });

  link3.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    // Username.focus();
    textfield.value="Хочу учиться в Los Angeles";
  });

  link4.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    // Username.focus();
    textfield.value="Хочу учиться в Santa Barbara";
  });

  link5.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    // Username.focus();
    textfield.value="Хочу учиться в New York";
  });

  link6.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    // Username.focus();
    textfield.value="Хочу учиться в Orlando";
  });

  link7.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    // Username.focus();
    textfield.value="Хочу учиться в Washington";
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