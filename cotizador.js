document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.formCotizador').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const cotizadorBox = form.closest('.cotizador-box');
      const servicio = cotizadorBox.dataset.servicio;
      const precioMin = parseFloat(cotizadorBox.dataset.precioMin);
      const precioMax = parseFloat(cotizadorBox.dataset.precioMax);

      const base = parseFloat(form.querySelector('.base').value);
      const altura = parseFloat(form.querySelector('.altura').value);
      const m2Input = parseFloat(form.querySelector('.m2').value);
      const resultadoDiv = form.querySelector('.resultado');

      let metrosCuadrados = 0;

      if (!isNaN(base) && !isNaN(altura)) {
        metrosCuadrados = base * altura;
      } else if (!isNaN(m2Input)) {
        metrosCuadrados = m2Input;
      } else {
        resultadoDiv.innerHTML = '<p style="color:red">Por favor, ingresa medidas válidas.</p>';
        return;
      }

      const estimadoMin = metrosCuadrados * precioMin;
      const estimadoMax = metrosCuadrados * precioMax;

      resultadoDiv.innerHTML = `
        <p><strong>${servicio}</strong></p>
        <p>Área: <strong>${metrosCuadrados.toFixed(2)} m²</strong></p>
        <p>Estimado: <strong>$${estimadoMin.toFixed(2)} – $${estimadoMax.toFixed(2)}</strong></p>
      `;

      form.reset()
    });
  });
});
