"use strict";

NodeList.prototype.forEach = function (callback) {
  [].slice.call(this).forEach(callback);
};

(function () {
  document.querySelectorAll(".ripple").forEach(function (el) {
    var span = document.createElement("span");
    span.className = "rippleJS";
    el.appendChild(span);
  });
})();