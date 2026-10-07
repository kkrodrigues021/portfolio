document.addEventListener("DOMContentLoaded", function () {
  history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  window.onbeforeunload = function () { window.scrollTo(0, 0); };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Scroll progress */
  const progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (progressBar && height > 0) {
      progressBar.style.width = (winScroll / height) * 100 + '%';
    }
  }, { passive: true });

  /* Scroll reveal */
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  sections.forEach(section => observer.observe(section));

  /* Botões magnéticos (todos) */
  if (!reduceMotion) {
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transition = 'transform 0.12s linear';
        btn.style.transform = `translate(${x * 0.28}px, ${y * 0.35}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        btn.style.transform = 'translate(0, 0)';
      });
    });
  }

  /* Spotlight: posição do cursor nos cards (.spot) */
  document.querySelectorAll('.spot').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
});
