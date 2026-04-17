const navbarHTML = `
<nav id="navbar">
  <a href="index.html" class="logo">
    <img
      class="logo-img"
      src="images/mine.png"
      alt="Optimum Innovation Lab Ltd"
      onerror="this.style.display='none'; document.querySelector('.logo-icon').style.display='flex';"
    />
    <div class="logo-icon">O</div>
    <div class="logo-text">
      <span class="logo-name">ptimum</span>
      <span class="logo-sub">Innovation Lab Ltd</span>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html#about">About</a></li>
    <li><a href="index.html#services">Services</a></li>
    <li><a href="index.html#why">Why Us</a></li>
    <li><a href="index.html#testimonials">Clients</a></li>
    <li><a href="index.html#contact">Contact</a></li>
  </ul>

  <!-- SYSTEM PORTAL LINKS — shown after scrolling past hero -->
  <div class="nav-systems" id="navSystems">
    <a href="#" class="sys-link audit" target="_blank" rel="noopener">
      <i class="fas fa-clipboard-check"></i>
      <span>Audit</span>
    </a>
    <a href="https://optimumlabstock.com" class="sys-link books" target="_blank" rel="noopener">
      <i class="fas fa-book-open"></i>
      <span>QuickBooks</span>
    </a>
    <a href="https://www.trackerking.net/" class="sys-link tracking" target="_blank" rel="noopener">
      <i class="fas fa-satellite-dish"></i>
      <span>Tracker</span>
    </a>
  </div>

  <a href="index.html#contact" class="nav-cta">Get In Touch</a>
  <div class="hamburger" onclick="toggleMenu()">
    <span></span><span></span><span></span>
  </div>
</nav>

<div class="overlay" id="overlay" onclick="toggleMenu()"></div>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html#about" onclick="toggleMenu()">About</a>
  <a href="index.html#services" onclick="toggleMenu()">Services</a>
  <a href="index.html#why" onclick="toggleMenu()">Why Us</a>
  <a href="index.html#testimonials" onclick="toggleMenu()">Clients</a>
  <a href="index.html#contact" onclick="toggleMenu()">Contact</a>
  <div class="mobile-systems">
    <p class="mobile-systems-label">System Portal</p>
    <a href="#" target="_blank" rel="noopener" onclick="toggleMenu()">
      <i class="fas fa-clipboard-check"></i> Audit System
    </a>
    <a href="https://optimumlabstock.com" target="_blank" rel="noopener" onclick="toggleMenu()">
      <i class="fas fa-book-open"></i> QuickBooks
    </a>
    <a href="https://www.trackerking.net/" target="_blank" rel="noopener" onclick="toggleMenu()">
      <i class="fas fa-satellite-dish"></i> Tracker
    </a>
  </div>
  <a href="index.html#contact" class="btn-primary mobile-cta" onclick="toggleMenu()">Get In Touch</a>
</div>
`;

const navbarCSS = `
  nav {
    position: fixed; top: 0; width: 100%; z-index: 1000;
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 6%;
    background: rgba(2,12,27,0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(0,212,255,0.12);
    transition: all 0.4s;
  }
  nav.scrolled { padding: 12px 6%; }

  .logo { display: flex; align-items: center; gap: 0px; text-decoration: none; }

  .logo-img {
    height: 65px; width: 65px;
    object-fit: contain; border-radius: 0;
    background: transparent; padding: 0px;
  }
  .logo-icon {
    width: 44px; height: 44px; border-radius: 12px;
    background: linear-gradient(135deg, #00d4ff, #0a84ff);
    display: none; align-items: center; justify-content: center;
    font-size: 20px; color: #fff; font-weight: 900;
    font-family: 'Orbitron', sans-serif;
    box-shadow: 0 0 20px rgba(0,212,255,0.35);
  }
  .logo-text { display: flex; flex-direction: column; line-height: 1.2; }
  .logo-name { font-family: 'Orbitron', sans-serif; font-size: 20px; font-weight: 700; color: #00d4ff; letter-spacing: 1px; }
  .logo-sub { font-size: 9px; color: #8892b0; letter-spacing: 2px; }

  .nav-links { display: flex; gap: 36px; list-style: none; }
  .nav-links a {
    color: rgba(204,214,246,0.85); text-decoration: none;
    font-size: 13px; font-weight: 500;
    transition: color 0.3s; position: relative;
  }
  .nav-links a::after {
    content: ''; position: absolute; bottom: -5px; left: 0;
    width: 0; height: 2px; background: #00d4ff; transition: width 0.3s;
  }
  .nav-links a:hover { color: #00d4ff; }
  .nav-links a:hover::after { width: 100%; }

  /* ── SYSTEM PORTAL LINKS ── */
  .nav-systems {
    display: flex; align-items: center; gap: 8px;
    opacity: 0; pointer-events: none;
    transform: translateY(-8px);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  .nav-systems.visible {
    opacity: 1; pointer-events: all;
    transform: translateY(0);
  }
  .sys-link {
    display: flex; align-items: center; gap: 6px;
    padding: 7px 14px; border-radius: 20px;
    font-size: 12px; font-weight: 600;
    text-decoration: none; transition: all 0.3s;
    border: 1px solid transparent;
  }
  .sys-link span { font-size: 12px; }
  .sys-link i { font-size: 11px; }

  .sys-link.audit {
    background: rgba(0,212,255,0.08);
    border-color: rgba(0,212,255,0.25);
    color: #00d4ff;
  }
  .sys-link.audit:hover {
    background: rgba(0,212,255,0.18);
    border-color: rgba(0,212,255,0.5);
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(0,212,255,0.2);
  }

  .sys-link.books {
    background: rgba(139,92,246,0.08);
    border-color: rgba(139,92,246,0.25);
    color: #a78bfa;
  }
  .sys-link.books:hover {
    background: rgba(139,92,246,0.18);
    border-color: rgba(139,92,246,0.5);
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(139,92,246,0.2);
  }

  .sys-link.tracking {
    background: rgba(16,185,129,0.08);
    border-color: rgba(16,185,129,0.25);
    color: #34d399;
  }
  .sys-link.tracking:hover {
    background: rgba(16,185,129,0.18);
    border-color: rgba(16,185,129,0.5);
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(16,185,129,0.2);
  }

  /* ── NAV CTA ── */
  .nav-cta {
    padding: 10px 26px; border-radius: 30px;
    background: linear-gradient(135deg, #00d4ff, #0a84ff);
    color: #fff; font-size: 13px; font-weight: 600;
    cursor: pointer; transition: all 0.3s; text-decoration: none;
    box-shadow: 0 2px 15px rgba(0,212,255,0.3);
  }
  .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 5px 25px rgba(0,212,255,0.5); }

  /* ── HAMBURGER ── */
  .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
  .hamburger span { width: 25px; height: 2px; background: #00d4ff; border-radius: 2px; transition: all 0.3s; }

  /* ── MOBILE MENU ── */
  .mobile-menu {
    position: fixed; top: 0; right: 0; bottom: 0; width: 280px;
    background: #0a1628; border-left: 1px solid rgba(0,212,255,0.1);
    z-index: 1001; padding: 100px 32px;
    transform: translateX(100%); transition: transform 0.3s;
    display: flex; flex-direction: column; gap: 24px;
    overflow-y: auto;
  }
  .mobile-menu.open { transform: translateX(0); }
  .mobile-menu a { color: #ccd6f6; text-decoration: none; font-size: 16px; font-weight: 500; transition: color 0.3s; }
  .mobile-menu a:hover { color: #00d4ff; }
  .mobile-cta { text-align: center; margin-top: 8px; }

  /* ── MOBILE SYSTEMS ── */
  .mobile-systems {
    border-top: 1px solid rgba(0,212,255,0.1);
    border-bottom: 1px solid rgba(0,212,255,0.1);
    padding: 16px 0; display: flex; flex-direction: column; gap: 14px;
  }
  .mobile-systems-label {
    font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
    color: #8892b0; margin-bottom: 4px;
  }
  .mobile-systems a {
    display: flex; align-items: center; gap: 10px;
    font-size: 14px; color: #ccd6f6;
  }
  .mobile-systems a i { font-size: 13px; color: #00d4ff; width: 16px; }

  .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 1000; display: none; }
  .overlay.open { display: block; }

  .btn-primary {
    padding: 14px 34px; border-radius: 8px;
    background: linear-gradient(135deg, #00d4ff, #0a84ff);
    color: #fff; font-weight: 600; font-size: 14px;
    text-decoration: none; transition: all 0.3s;
    box-shadow: 0 4px 20px rgba(0,132,255,0.35);
    display: inline-flex; align-items: center; gap: 8px;
  }
  .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 35px rgba(0,212,255,0.45); }

  @media (max-width: 1024px) {
    .nav-links, .nav-cta, .nav-systems { display: none; }
    .hamburger { display: flex; }
  }
`;

/* ── INJECT NAVBAR ── */
document.addEventListener('DOMContentLoaded', () => {

  // inject CSS
  const style = document.createElement('style');
  style.textContent = navbarCSS;
  document.head.appendChild(style);

  // inject HTML
  const wrapper = document.createElement('div');
  wrapper.innerHTML = navbarHTML;
  document.body.insertBefore(wrapper, document.body.firstChild);

  // scroll effect — navbar + system links visibility
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const navSystems = document.getElementById('navSystems');
    const hero = document.getElementById('hero');

    // scrolled class for navbar shrink
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    // show system links only after scrolling past hero
    if (hero) {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      navSystems.classList.toggle('visible', window.scrollY > heroBottom);
    }
  });

  // fade animation observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

/* ── MOBILE MENU ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}