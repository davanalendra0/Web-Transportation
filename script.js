// ── Mobile Menu ───────────────────────────────────────────────
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const burger = document.getElementById('hamburger');
    menu.classList.toggle('open');
    burger.classList.toggle('open');
}

document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    }
});

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
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
}

  // ── Navbar Scroll Shadow ──────────────────────────────────────
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    nav.style.background = window.scrollY > 20
        ? 'rgba(7,14,9,.97)'
        : 'rgba(7,14,9,.85)';
});

  // ── Form Submit ─────────────────────────────────────────────
function handleFormSubmit(e) {
    const btn = e.currentTarget;
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