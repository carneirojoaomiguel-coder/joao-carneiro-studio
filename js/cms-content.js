// External video players are created only after an explicit click.
document.addEventListener('click', function (event) {
  const button = event.target.closest('[data-video-src]');
  if (!button) return;
  try {
    const url = new URL(button.dataset.videoSrc);
    if (url.protocol !== 'https:' || !['www.youtube-nocookie.com', 'player.vimeo.com'].includes(url.hostname)) return;
    const frame = document.createElement('iframe');
    frame.className = 'cms-embed';
    frame.src = url.href;
    frame.title = button.dataset.videoTitle || 'Vídeo';
    frame.allow = 'encrypted-media; picture-in-picture; fullscreen';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    button.replaceWith(frame);
  } catch { /* Invalid addresses never create an iframe. */ }
});
