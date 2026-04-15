/* === ZENOVA — Main JavaScript === */

/* --- Scroll Progress Bar --- */
const progressBar = document.getElementById('progress-bar');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
  }, { passive: true });
}

/* --- Navbar: scroll behavior --- */
const navbar = document.getElementById('navbar');
if (navbar) {
  const updateNav = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav(); // run on load
}

/* --- Hamburger Menu --- */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* --- Reveal on Scroll --- */
const reveals = document.querySelectorAll('.reveal, .reveal-left');
if (reveals.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      // Animate skill bars inside revealed elements
      entry.target.querySelectorAll('.skill-fill').forEach(el => el.classList.add('animated'));
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => io.observe(el));
}

/* --- FAQ Accordion --- */
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* --- Parallax on hero photo (subtle) --- */
const heroBg = document.querySelector('.hero-photo-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `translateY(${y * 0.3}px)`;
  }, { passive: true });
}

/* --- Smooth scroll for anchor links --- */
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    const [page, hash] = href.split('#');
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    // Only intercept same-page anchors
    if (hash && (page === '' || page === currentPage)) {
      const target = document.getElementById(hash);
      if (!target) return;
      e.preventDefault();
      const offset = 72; // nav-h
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});
