// Função para adicionar a classe 'visible' quando a seção estiver visível na tela
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = window.innerHeight - sectionTop > 100;
        
        if (sectionVisible) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Evento de rolagem
window.addEventListener('scroll', handleScroll);

// Executa a função de rolagem ao carregar a página para garantir que as seções visíveis sejam detectadas
window.onload = function() {
    document.getElementById('loading')?.style.display = 'none';  // Esconde o carregamento quando a página terminar de carregar

    // Chama a função de rolagem ao carregar a página
    handleScroll();
};
