<script>
  const contadorEl = document.getElementById("contador-visitas");

  fetch('https://api.countapi.xyz/update/kaiky-portfolio-2025/visitas/?amount=1')
    .then(res => res.json())
    .then(data => {
      contadorEl.innerText = `Visitas: ${data.value}`;
    })
    .catch(() => {
      contadorEl.innerText = 'Visitas: erro';
    });
</script>