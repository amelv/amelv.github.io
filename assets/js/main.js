$(document).ready(function () {
  function checkFadeIn() {
    $('.fade-in').each(function () {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element - 100) {
        $(this).addClass('visible');
      }
    });
  }

  $(window).on('scroll resize', checkFadeIn);
  checkFadeIn(); // Initial check on page load
});
