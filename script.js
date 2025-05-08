document.addEventListener("DOMContentLoaded", function () {
  // Tema claro/escuro com localStorage
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

  // Animação de seções ao entrar na tela
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Animar barras de nível de habilidade
        if (entry.target.id === 'habilidades') {
          const niveis = entry.target.querySelectorAll('.nivel');
          niveis.forEach(nivel => {
            const valor = nivel.getAttribute('data-nivel');
            nivel.style.width = valor;
            nivel.querySelector('::after').style.width = valor;
          });
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Efeito de digitação no título
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

  // Atualizar ano no footer
  document.getElementById('ano-atual').textContent = new Date().getFullYear();

  // Configuração das partículas
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

  // Formulário de contato
  const formContato = document.getElementById('form-contato');
  if (formContato) {
    formContato.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const btnEnviar = this.querySelector('button[type="submit"]');
      const originalText = btnEnviar.innerHTML;
      
      btnEnviar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      btnEnviar.disabled = true;

      try {
        const response = await fetch('https://seu-backend.com/api/contato', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nome: this.nome.value,
            email: this.email.value,
            mensagem: this.mensagem.value
          })
        });

        if (response.ok) {
          btnEnviar.innerHTML = '<i class="fas fa-check"></i> Enviado!';
          this.reset();
        } else {
          throw new Error('Erro ao enviar');
        }
      } catch (error) {
        btnEnviar.innerHTML = '<i class="fas fa-times"></i> Erro';
      } finally {
        setTimeout(() => {
          btnEnviar.innerHTML = originalText;
          btnEnviar.disabled = false;
        }, 3000);
      }
    });
  }

  // Validação de email antes de envio
  document.querySelector('form').addEventListener('submit', function(e) {
    const email = this.querySelector('input[type="email"]').value;
    if (!email.includes('@') || !email.includes('.')) {
      e.preventDefault();
      alert('Por favor, insira um email válido!');
    }
  });
  
});