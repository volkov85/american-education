var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-50);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}


function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}


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