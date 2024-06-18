document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.logo-row');

  let isDown = false;
  let startX;
  let scrollLeft;

  const startDragging = (e) => {
    isDown = true;
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const stopDragging = () => {
    isDown =  false;
  };

  const moveSlider = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;

  };

  slider.addEventListener('mousedown', startDragging);
  slider.addEventListener('mouseleave', stopDragging);
  slider.addEventListener('mouseup', stopDragging);
  slider.addEventListener('mousemove', moveSlider);

  slider.addEventListener('touchstart', startDragging);
  slider.addEventListener('touchend', stopDragging);
  slider.addEventListener('touchmove', moveSlider);
});