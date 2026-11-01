/* =====================================================
   LUMIÈRE STUDIO — interactions & animations
   Vanilla JS, sans dépendance.
   ===================================================== */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Navbar : ombre au scroll ---------- */
  var navbar = document.querySelector(".navbar");
  if (navbar) {
    var updateNavbar = function () {
      navbar.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
  }

  /* ---------- Menu mobile (burger) ---------- */
  var navToggle = document.getElementById("navToggle");
  var mobileMenu = document.getElementById("mobileMenu");

  if (navToggle && mobileMenu) {
    var closeMobileMenu = function () {
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("is-open");
    };

    navToggle.addEventListener("click", function () {
      var isOpen = navToggle.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      mobileMenu.classList.toggle("is-open", isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMobileMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) closeMobileMenu();
    });
  }

  /* ---------- Révélation au scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  /* ---------- Compteur animé des statistiques ---------- */
  var statNums = document.querySelectorAll(".stat .num[data-value]");

  var animateCount = function (el) {
    var target = parseFloat(el.dataset.value);
    var suffix = el.dataset.suffix || "";

    if (reducedMotion || isNaN(target)) {
      el.textContent = target + suffix;
      return;
    }

    var duration = 1200;
    var start = null;

    var step = function (timestamp) {
      if (start === null) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    };
    requestAnimationFrame(step);
  };

  if (statNums.length) {
    if (reducedMotion || !("IntersectionObserver" in window)) {
      statNums.forEach(animateCount);
    } else {
      var statObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCount(entry.target);
              statObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      statNums.forEach(function (el) {
        statObserver.observe(el);
      });
    }
  }
})();
