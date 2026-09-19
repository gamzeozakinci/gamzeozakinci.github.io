document.getElementById('year').textContent = new Date().getFullYear();

const links = [...document.querySelectorAll('#navLinks a')];
const sections = links
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

function setActive(id) {
  links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-15% 0px -70% 0px' }
  );
  sections.forEach((s) => observer.observe(s));
}

setActive('contact');
