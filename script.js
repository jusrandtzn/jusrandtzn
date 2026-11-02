document.getElementById('year').textContent = new Date().getFullYear();

// Keep the video reel focused: when one clip starts, pause the others.
const clips = [...document.querySelectorAll('.video-card video')];
clips.forEach((clip) => {
  clip.addEventListener('play', () => {
    clips.filter((other) => other !== clip).forEach((other) => other.pause());
  });
});
