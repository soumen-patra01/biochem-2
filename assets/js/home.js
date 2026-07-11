/* BIOCHEM TECHNOLOGIES — home.js
   Logo marquee loop · testimonial slider controls */
(function () {
  "use strict";

  /* Duplicate marquee content for a seamless loop */
  var track = document.querySelector("[data-marquee]");
  if (track) {
    track.innerHTML += track.innerHTML;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.style.animation = "none";
    }
  }

  /* Testimonial slider */
  var testi = document.querySelector("[data-testi]");
  var prev = document.querySelector("[data-testi-prev]");
  var next = document.querySelector("[data-testi-next]");
  if (testi && prev && next) {
    var step = function () {
      var card = testi.querySelector(".testi-card");
      return card ? card.getBoundingClientRect().width + 24 : 480;
    };
    prev.addEventListener("click", function () { testi.scrollBy({ left: -step(), behavior: "smooth" }); });
    next.addEventListener("click", function () { testi.scrollBy({ left: step(), behavior: "smooth" }); });
  }
})();
