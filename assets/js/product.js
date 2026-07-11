/* BIOCHEM TECHNOLOGIES — product.js
   Sidebar scroll-spy for the product details page */
(function () {
  "use strict";
  var links = document.querySelectorAll("[data-pagenav] a");
  if (!links.length || !("IntersectionObserver" in window)) return;

  var map = {};
  links.forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    map[id] = a;
  });

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        links.forEach(function (a) { a.classList.remove("is-active"); });
        var link = map[entry.target.id];
        if (link) link.classList.add("is-active");
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  Object.keys(map).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) spy.observe(el);
  });
})();
