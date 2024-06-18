function showNotifier(notifier) {
  notifier.classList.remove('disabled');
}
document.querySelectorAll('.video-play').forEach(playButton => {
  const dataId = playButton.getAttribute('data-id');
  const correspondingNotifier = document.querySelector(`.video-play-notifier[data-id="${dataId}"]`);

  playButton.addEventListener('click', () => {
    showNotifier(correspondingNotifier);
  });
});

document.addEventListener('click', function(event) {
  const notifiers = document.querySelectorAll('.video-play-notifier');

  notifiers.forEach(notifier => {
    const dataId = notifier.getAttribute('data-id');
    const playButton = document.querySelector(`.video-play[data-id="${dataId}"]`);

    if (!notifier.contains(event.target) && !playButton.contains(event.target)) {
      notifier.classList.add('disabled');
    }
  });
});
