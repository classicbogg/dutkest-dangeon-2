const jester = document.querySelector('.jester');
const jesterSound = document.getElementById('jester-sound');

jester.addEventListener('mouseenter', () => {
  jesterSound.currentTime = 0;
  jesterSound.volume = 0.1;
  jesterSound.play();
});


const IntroSound = document.getElementById('intro-sound')
window.addEventListener('click', () =>  {
    IntroSound.play();
},{once:true});


const StressSound =  document.getElementById('stress-sound');
StressSound.volume = 0.3;
const allCards = document.querySelectorAll('.hero-card');

allCards.forEach(card => {
    if (card.classList.contains('jester'))return;

card.addEventListener('mouseenter', () => {
    StressSound.currentTime = 0;
    StressSound.play();
});
});

document.addEventListener('DOMContentLoaded', () => {
  const fragmentLines = document.querySelectorAll('.fragments span');
  if (!fragmentLines.length) {
    return;
  }

  function highlightRandomFragment() {
    fragmentLines.forEach(line => {
      line.classList.remove('is-highlighted'); 
    });

    const randomIndex = Math.floor(Math.random() * fragmentLines.length);
    const randomLine = fragmentLines[randomIndex];

    randomLine.classList.add('is-highlighted'); 
  }
  highlightRandomFragment();
});
