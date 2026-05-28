document.addEventListener("DOMContentLoaded", function() {
  history.scrollRestoration = 'manual'; 
  window.scrollTo(0, 0); 

  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };

  const progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  });

  const sections = document.querySelectorAll('.section');
  const observerOptions = {
    threshold: 0.12, 
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  const magneticBtn = document.querySelector('.magnetic-btn');
  if (magneticBtn) {
    magneticBtn.addEventListener('mousemove', function(e) {
      const position = magneticBtn.getBoundingClientRect();
      const x = e.clientX - position.left - position.width / 2;
      const y = e.clientY - position.top - position.height / 2;
      
      magneticBtn.style.transition = 'transform 0.1s linear';
      magneticBtn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    magneticBtn.addEventListener('mouseout', function(e) {
      magneticBtn.style.transition = 'transform 0.3s ease';
      magneticBtn.style.transform = `translate(0px, 0px)`;
    });
  }
});