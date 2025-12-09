const introSound = document.getElementById('intro-sound');
if (introSound) {
  window.addEventListener(
    'click',
    () => {
      introSound.currentTime = 0;
      introSound.volume = 0.5;
      introSound.play().catch(() => {

      });
    },
    { once: true }
  );
}
const scrollContainer = document.querySelector('.hero-scroll');
const sections = document.querySelectorAll('.hero-section');
const navLinks = document.querySelectorAll('.hero-nav-link');

const sectionIdToLink = {};

sections.forEach(section => {
    const id = section.id;
    const link = document.querySelector(`.hero-nav-link[href="#${id}"]`);
    if (link) {
        sectionIdToLink[id] = link;
    }
});

function setActiveLink(activeId) {
  navLinks.forEach(link => {
    link.classList.remove('is-active');
  });

    const activeLink = sectionIdToLink[activeId];
    if (activeLink) {
        activeLink.classList.add('is-active');
    }
}

scrollContainer.addEventListener ('scroll', () => {
const center = scrollContainer.scrollTop + scrollContainer.clientHeight /2;
let currentId = null;

sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (center >= top && center< bottom) {
        currentId = section.id;
}
});

if (currentId) {
    setActiveLink(currentId);
}
});