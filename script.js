// Contador de visitas
let visitas = localStorage.getItem('visitas') ? parseInt(localStorage.getItem('visitas')) : 0;
visitas++;
localStorage.setItem('visitas', visitas);

// Atualiza o contador na página
document.getElementById('contador-visitas').innerText = `Visitas: ${visitas}`;
