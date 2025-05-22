document.addEventListener("DOMContentLoaded", function() {
  // =============================================
  // COMPORTAMENTO DE ROLAGEM AO RECARREGAR
  // =============================================
  history.scrollRestoration = 'manual'; // Desativa o comportamento padrão de manter a posição
  window.scrollTo(0, 0); // Garante que inicia no topo

  // Configura para voltar ao topo antes do recarregamento
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };

  // =============================================
  // TOGGLE DE TEMA CLARO/ESCURO
  // =============================================
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = toggleButton.querySelector('i');

  // Verificar preferência do usuário
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = localStorage.getItem('theme') || (userPrefersDark ? 'dark' : 'light');

  if (currentTheme === 'light') {
    body.classList.add('light-theme');
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    body.classList.remove('light-theme');
    icon.classList.replace('fa-sun', 'fa-moon');
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'light');
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      localStorage.setItem('theme', 'dark');
      icon.classList.replace('fa-sun', 'fa-moon');
    }
  });

  // =============================================
  // NAVEGAÇÃO POR TECLADO
  // =============================================
  function setupKeyboardNavigation() {
    const mainNav = document.getElementById('main-nav');
    const sections = document.querySelectorAll('.section');
    
    const navLinks = Array.from(sections).map(section => {
      const id = section.id;
      const title = section.querySelector('h2').textContent;
      return `<a href="#${id}" class="nav-link">${title}</a>`;
    }).join('');
    
    mainNav.innerHTML = navLinks;
    mainNav.style.display = 'block';
    
    // Adicionar foco visível a todos os elementos interativos
    document.querySelectorAll('a, button, input, textarea, [tabindex]').forEach(el => {
      el.addEventListener('focus', () => {
        el.style.outline = `3px solid ${getComputedStyle(document.documentElement).getPropertyValue('--accent-color')}`;
        el.style.outlineOffset = '3px';
      });
      el.addEventListener('blur', () => {
        el.style.outline = 'none';
      });
    });
  }

  // Inicializar navegação por teclado
  setupKeyboardNavigation();

  // =============================================
  // EFEITO DE DIGITAÇÃO NO TÍTULO
  // =============================================
  const titulo = document.getElementById('typing-effect');
  if (titulo) {
    const texto = titulo.textContent;
    titulo.textContent = '';
    titulo.style.borderRight = '2px solid ' + getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
    
    let i = 0;
    const typing = setInterval(() => {
      if (i < texto.length) {
        titulo.textContent += texto.charAt(i);
        i++;
      } else {
        clearInterval(typing);
        titulo.style.borderRight = 'none';
      }
    }, 100);
  }

  // =============================================
  // ATUALIZAR ANO NO FOOTER
  // =============================================
  const yearElement = document.getElementById('ano-atual') || document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // =============================================
  // CONFIGURAÇÃO DAS PARTÍCULAS
  // =============================================
  if (window.tsParticles) {
    tsParticles.load("tsparticles", {
      fullScreen: { enable: true, zIndex: -1 },
      particles: {
        number: { value: 60 },
        color: { value: getComputedStyle(document.documentElement).getPropertyValue('--accent-color') },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { enable: true, speed: 1.5 },
        links: {
          enable: true,
          distance: 150,
          color: getComputedStyle(document.documentElement).getPropertyValue('--accent-color'),
          opacity: 0.3,
          width: 1
        }
      },
      background: {
        color: getComputedStyle(document.documentElement).getPropertyValue('--bg-color')
      }
    });
  }

  // =============================================
  // ANIMAÇÃO DE SEÇÕES AO ROLAR
  // =============================================
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        if (entry.target.id === 'habilidades' || entry.target.id === 'skills') {
          const niveis = entry.target.querySelectorAll('.nivel');
          niveis.forEach(nivel => {
            const valor = nivel.getAttribute('data-nivel');
            nivel.style.width = valor;
          });
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.05,
    rootMargin: '0px 0px -100px 0px'
  });

  sections.forEach(section => observer.observe(section));

  // =============================================
  // FALLBACK PARA MOBILE
  // =============================================
  if (window.innerWidth <= 768) {
    const projetosSection = document.getElementById('projetos') || document.getElementById('projects');
    if (projetosSection) {
      projetosSection.classList.add('visible');
      projetosSection.style.opacity = '1';
      projetosSection.style.transform = 'translateY(0)';
    }
  }
});

// =============================================
// COMPORTAMENTO AO SAIR/RECARREGAR A PÁGINA
// =============================================
window.onbeforeunload = function() {
  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
};