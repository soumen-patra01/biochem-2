/* BIOCHEM TECHNOLOGIES — main.js
   Navbar behaviour · mega menu · mobile menu · scroll reveal · counters · accordions · modals */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Navbar scroll state ---------- */
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mega menu ---------- */
  var megaBtn = document.querySelector("[data-mega-btn]");
  var mega = document.querySelector("[data-mega]");
  if (megaBtn && mega) {
    var closeMega = function () {
      mega.classList.remove("is-open");
      megaBtn.setAttribute("aria-expanded", "false");
    };
    megaBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = mega.classList.toggle("is-open");
      megaBtn.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", function (e) {
      if (!mega.contains(e.target)) closeMega();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMega();
    });
  }

  /* ---------- Mobile menu ---------- */
  var burger = document.querySelector(".nav__burger");
  var mobileMenu = document.querySelector(".mobile-menu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Counters ---------- */
  var counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    var animate = function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      if (reduced) { el.textContent = target + suffix; return; }
      var start = null, dur = 1200;
      var step = function (ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if ("IntersectionObserver" in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animate(entry.target);
            cio.unobserve(entry.target);
          }
        });
      }, { threshold: 0.6 });
      counters.forEach(function (el) { cio.observe(el); });
    } else {
      counters.forEach(animate);
    }
  }

  /* ---------- Accordions ---------- */
  document.querySelectorAll(".accordion__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var acc = btn.closest(".accordion");
      var open = acc.hasAttribute("data-open");
      if (open) {
        acc.removeAttribute("data-open");
      } else {
        acc.setAttribute("data-open", "");
      }
      btn.setAttribute("aria-expanded", String(!open));
    });
  });

  /* ---------- Modals ---------- */
  var lastFocus = null;
  function openModal(id) {
    var layer = document.getElementById(id);
    if (!layer) return;
    lastFocus = document.activeElement;
    layer.classList.add("is-open");
    layer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    var focusable = layer.querySelector("input, button, [href], select, textarea");
    if (focusable) focusable.focus();
  }
  function closeModal(layer) {
    layer.classList.remove("is-open");
    layer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  document.addEventListener("click", function (e) {
    var opener = e.target.closest("[data-modal-open]");
    if (opener) {
      e.preventDefault();
      openModal(opener.getAttribute("data-modal-open"));
      var name = opener.getAttribute("data-product-name");
      if (name) {
        var slot = document.querySelector("#" + opener.getAttribute("data-modal-open") + " [data-product-slot]");
        if (slot) slot.textContent = name;
      }
      return;
    }
    var closer = e.target.closest("[data-modal-close]");
    if (closer) { closeModal(closer.closest(".overlay-layer")); return; }
    if (e.target.classList && e.target.classList.contains("overlay-layer")) closeModal(e.target);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      var open = document.querySelector(".overlay-layer.is-open");
      if (open) closeModal(open);
    }
  });

  /* ---------- Demo form handling (no backend) ---------- */
  document.querySelectorAll("[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      var original = btn.innerHTML;
      btn.classList.add("is-loading");
      btn.innerHTML = '<span class="btn__spinner" aria-hidden="true"></span><span class="btn__label">Submitting…</span>';
      setTimeout(function () {
        btn.classList.remove("is-loading");
        btn.innerHTML = "✓ Request received";
        btn.style.background = "var(--success)";
        btn.style.color = "#06281C";
        setTimeout(function () {
          btn.innerHTML = original;
          btn.style.background = "";
          btn.style.color = "";
          form.reset();
          var layer = form.closest(".overlay-layer");
          if (layer) closeModal(layer);
        }, 1800);
      }, 900);
    });
  });

  /* ---------- Copy product code ---------- */
  document.querySelectorAll("[data-copy]").forEach(function (el) {
    el.addEventListener("click", function () {
      var text = el.getAttribute("data-copy");
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        var prev = el.getAttribute("data-tip");
        el.setAttribute("data-tip", "Copied!");
        setTimeout(function () { el.setAttribute("data-tip", prev); }, 1400);
      }
    });
  });

  /* ---------- Current year ---------- */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
