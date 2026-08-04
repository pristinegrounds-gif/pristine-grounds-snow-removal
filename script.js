// Small quality-of-life improvement: preserve the visitor's place if they return from a phone call.
document.querySelectorAll('a[href^="tel:"], a[href^="sms:"]').forEach(link => {
  link.addEventListener('click', () => {
    sessionStorage.setItem('pg-scroll-position', String(window.scrollY));
  });
});

window.addEventListener('load', () => {
  const saved = sessionStorage.getItem('pg-scroll-position');
  if (saved) {
    window.scrollTo({ top: Number(saved), behavior: 'instant' });
    sessionStorage.removeItem('pg-scroll-position');
  }
});
