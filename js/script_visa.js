var popup = document.querySelector(".call-form-popup");
var Username = popup.querySelector("[name=Username]");
var close = popup.querySelector(".popup-close");
var form = popup.querySelector("form");
var textfield = document.querySelector(".about-call-form-action-text");

var link21 = document.querySelector(".visa-button-usa");
var link22 = document.querySelector(".visa-button-gb");
var link23 = document.querySelector(".visa-button-can");
var link24 = document.querySelector(".visa-button-eu");


  link21.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    textfield.value="Консультация по визе в США";
  });

  link22.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    textfield.value="Консультация по визе в Великобританию";
  });

  link23.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    textfield.value="Консультация по визе в Канаду";
  });

  link24.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");
    textfield.value="Консультация по шенгенской визе";
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