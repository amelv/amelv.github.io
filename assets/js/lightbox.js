/* Lightbox for portfolio/gallery images — dependency-free, accessible.
   Opens images inside .project-gallery or .cs-figure on click. */
(function () {
  'use strict';

  var dialog, dialogImg, dialogCaption, dialogClose;

  function openLightbox(img) {
    if (!dialog) build();
    dialogImg.src = img.currentSrc || img.src;
    dialogImg.alt = img.alt;
    var fig = img.closest('figure');
    var cap = fig && fig.querySelector('figcaption');
    dialogCaption.textContent = cap ? cap.textContent : (img.alt || '');
    dialog.hidden = false;
    document.body.classList.add('lightbox-open');
    dialogClose.focus();
    document.addEventListener('keydown', onKey, true);
  }

  function closeLightbox() {
    if (!dialog || dialog.hidden) return;
    dialog.hidden = true;
    document.body.classList.remove('lightbox-open');
    dialogImg.removeAttribute('src');
    document.removeEventListener('keydown', onKey, true);
    // return focus to the trigger
    if (lastTrigger) lastTrigger.focus();
  }

  var lastTrigger = null;
  function onKey(e) {
    if (e.key === 'Escape') closeLightbox();
  }

  function build() {
    dialog = document.createElement('div');
    dialog.className = 'lightbox';
    dialog.hidden = true;
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');
    dialog.setAttribute('aria-label', 'Image preview');

    dialogClose = document.createElement('button');
    dialogClose.className = 'lightbox-close';
    dialogClose.type = 'button';
    dialogClose.setAttribute('aria-label', 'Close image');
    dialogClose.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m5.3 5.3 13.4 13.4m0-13.4L5.3 18.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

    dialogImg = document.createElement('img');
    dialogImg.className = 'lightbox-img';
    dialogImg.alt = '';

    dialogCaption = document.createElement('figcaption');
    dialogCaption.className = 'lightbox-caption';

    var inner = document.createElement('figure');
    inner.className = 'lightbox-figure';
    inner.appendChild(dialogImg);
    inner.appendChild(dialogCaption);

    dialog.appendChild(dialogClose);
    dialog.appendChild(inner);

    dialog.addEventListener('click', function (e) {
      if (e.target === dialog || e.target === inner) closeLightbox();
    });
    dialogClose.addEventListener('click', closeLightbox);

    document.body.appendChild(dialog);
  }

  function isLightboxImage(img) {
    return !!img.closest('.project-gallery, .cs-figure');
  }

  document.addEventListener('click', function (e) {
    var img = e.target.closest('img');
    if (!img || !isLightboxImage(img)) return;
    if (img.closest('.lightbox')) return;
    e.preventDefault();
    lastTrigger = img;
    openLightbox(img);
  });
})();
