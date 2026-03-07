// ── Page Navigation ──────────────────────────────────────────
function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + name).classList.add('active');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navEl = document.getElementById('nav-' + name);
    if (navEl) navEl.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Re-trigger fade-ins
    setTimeout(observeFadeIns, 100);
}

// ── Mobile Menu ───────────────────────────────────────────────
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const burger = document.getElementById('hamburger');
    menu.classList.toggle('open');
    burger.classList.toggle('open');
}

// ── Scroll to Contact ─────────────────────────────────────────
function scrollToContact() {
    showPage('home');
    setTimeout(() => {
        document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
    }, 200);
}

function scrollToContactShop() {
    showPage('home');
    setTimeout(() => {
        document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
    }, 200);
}

  // ── Filter Products ───────────────────────────────────────────
function filterProducts(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.product-card').forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

  // ── Fade-in Observer ──────────────────────────────────────────
function observeFadeIns() {
    const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.12 });
    els.forEach(el => { el.classList.remove('visible'); obs.observe(el); });
}

  // ── Navbar Scroll Shadow ──────────────────────────────────────
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 20) {
        nav.style.background = 'rgba(7,14,9,.97)';
    } else {
        nav.style.background = 'rgba(7,14,9,.85)';
    }
});

  // ── Form Submit ─────────────────────────────────────────────
function handleFormSubmit() {
    const btn = event.target;
    btn.textContent = '✓ Pesan Terkirim!';
    btn.style.background = 'var(--bronze)';
    setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
    }, 3000);
}

  // ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('js-ready');
    observeFadeIns();
});