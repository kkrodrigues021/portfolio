// Rolagem automática horizontal para a seção de habilidades
const habilidadesScroll = document.getElementById('habilidades-scroll');
const scrollWidth = habilidadesScroll.scrollWidth; // Largura total do conteúdo
const containerWidth = habilidadesScroll.clientWidth; // Largura do contêiner visível

let scrollPosition = 0; // Posição inicial da rolagem
const scrollStep = 1; // Aumente este valor para uma rolagem mais rápida

let scrollInterval = setInterval(() => {
    scrollPosition += scrollStep; // Move a rolagem para a direita

    // Se a posição de rolagem atingir a largura total, reinicie
    if (scrollPosition >= scrollWidth) {
        scrollPosition = 0; // Reinicia a rolagem
    }

    habilidadesScroll.scrollLeft = scrollPosition; // Atualiza a posição de rolagem
}, 30); // Ajuste a velocidade da rolagem alterando o valor aqui