// ---------- theme toggle (dark / light) ----------

const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function currentTheme() {
  return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function syncThemeUi() {
  const dark = currentTheme() === 'dark';
  themeBtn.setAttribute('aria-pressed', String(dark));
  themeBtn.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
  if (themeMeta) themeMeta.setAttribute('content', dark ? '#16111f' : '#f8eedd');
}

themeBtn.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked: the choice just is not remembered */ }
  syncThemeUi();
});
syncThemeUi();

document.getElementById('year').textContent = new Date().getFullYear();

const links = [...document.querySelectorAll('#navLinks a')];
const ids = links.map((a) => a.getAttribute('href').slice(1));
let lockUntil = 0;

function setActive(id) {
  links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
}

function update() {
  if (Date.now() < lockUntil) return;
  const y = window.scrollY;
  if (y <= 1) return setActive('contact');

  const atBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 4;
  if (atBottom) return setActive(ids[ids.length - 1]);

  let current = 'contact';
  ids.forEach((id) => {
    if (id === 'contact') return;
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 140) current = id;
  });
  setActive(current);
}

links.forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    setActive(id);
    lockUntil = Date.now() + 900;
    if (id === 'contact') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', '#contact');
    }
  });
});

window.addEventListener('scroll', update, { passive: true });
window.addEventListener('resize', update);
if (location.hash === '#contact') window.scrollTo(0, 0);
update();
