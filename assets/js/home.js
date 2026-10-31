/* Landing page behaviour: hero carousel and the horizontally scrolling news row.
   Loaded only by _layouts/home.html. No dependencies. */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Hero carousel ---- */
  var slider = document.getElementById('hero-slider');
  if (slider) {
    var slides = Array.prototype.slice.call(slider.querySelectorAll('.slide'));
    var dots = Array.prototype.slice.call(slider.querySelectorAll('.dot'));
    var caption = document.getElementById('hero-caption');
    var idx = 0;
    var timer = null;
    var delay = parseInt(slider.getAttribute('data-interval'), 10) || 6000;

    var go = function (n) {
      if (!slides.length) { return; }
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('active', i === idx); });
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === idx);
        d.setAttribute('aria-selected', i === idx ? 'true' : 'false');
      });
      if (caption) { caption.textContent = slides[idx].getAttribute('data-caption') || ''; }
    };
    var stop = function () { if (timer) { clearInterval(timer); timer = null; } };
    var restart = function () {
      stop();
      if (!reduce && slides.length > 1) { timer = setInterval(function () { go(idx + 1); }, delay); }
    };

    slider.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('[data-slide]') : null;
      if (!btn) { return; }
      var v = btn.getAttribute('data-slide');
      if (v === 'prev') { go(idx - 1); } else if (v === 'next') { go(idx + 1); } else { go(parseInt(v, 10) || 0); }
      restart();
    });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', restart);
    slider.addEventListener('focusin', stop);
    slider.addEventListener('focusout', restart);
    document.addEventListener('visibilitychange', function () { if (document.hidden) { stop(); } else { restart(); } });

    var x0 = null;
    slider.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener('touchend', function (e) {
      if (x0 === null) { return; }
      var dx = e.changedTouches[0].clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 40) { go(dx < 0 ? idx + 1 : idx - 1); restart(); }
    }, { passive: true });

    go(0);
    restart();
  }

  /* ---- News row scroll buttons ---- */
  var track = document.getElementById('news-track');
  if (track) {
    var step = function () {
      var c = track.querySelector('.ncard');
      return c ? c.getBoundingClientRect().width + 22 : 300;
    };
    Array.prototype.forEach.call(document.querySelectorAll('[data-track]'), function (b) {
      b.addEventListener('click', function () {
        var dir = b.getAttribute('data-track') === 'prev' ? -1 : 1;
        track.scrollBy({ left: dir * step(), behavior: reduce ? 'auto' : 'smooth' });
      });
    });
  }
})();
