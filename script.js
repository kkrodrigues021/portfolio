<script>
  const contadorEl = document.getElementById("contador-visitas");

  fetch('https://api.countapi.xyz/update/kaiky-portfolio/visits/?amount=1')
    .then(res => res.json())
    .then(data => {
      contadorEl.innerText = `Visitas: ${data.value}`;
    })
    .catch(err => {
      contadorEl.innerText = 'Visitas: erro';
      console.error(err);
    });
</script>