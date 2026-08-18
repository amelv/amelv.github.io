// Respect prefers-reduced-motion: pause autoplaying videos
(function () {
  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  function apply(m) {
    document.querySelectorAll('.cs-figure video').forEach(function (v) {
      if (m.matches) {
        v.pause();
      }
    });
  }
  apply(mq);
  mq.addEventListener('change', function () { apply(mq); });
})();
