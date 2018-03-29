/* Komtrollerar webb läsarens scroll */
var playOn;

document.getElementById("enable").onclick = function () {
   enableScroll();
   document.getElementById("status").innerHTML = "scroll enabled";
   document.getElementById("status").className = "enabled";
   playOn = false;
};

document.getElementById("disable").onclick = function () {
   disableScroll();
   document.getElementById("status").innerHTML = "scroll disabled";
   document.getElementById("status").className = "disabled";
   playOn = true;
};

/* left: 37, up: 38, right: 39, down: 40,
   spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 */
var keys = {
   32: 1,
   37: 1,
   38: 1,
   39: 1,
   40: 1
};

function preventDefault(e) {
   e = e || window.event;
   if (e.preventDefault)
      e.preventDefault();
   e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
   if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
   }
}

function disableScroll() {
   if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
   window.onwheel = preventDefault; // modern standard
   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
   window.ontouchmove = preventDefault; // mobile
   document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
   if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
   window.onmousewheel = document.onmousewheel = null;
   window.onwheel = null;
   window.ontouchmove = null;
   document.onkeydown = null;
}
