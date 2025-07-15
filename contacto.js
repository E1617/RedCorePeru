document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contacto-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que recargue la página

    const inputs = form.querySelectorAll("input, select, textarea");
    let camposCompletos = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        camposCompletos = false;
      }
    });

    if (!camposCompletos) {
      alert("Por favor, complete todos los campos antes de enviar.");
      return;
    }

    form.reset();

    // Mostrar mensaje de éxito
    const mensaje = document.createElement("p");
    mensaje.textContent = "¡Gracias por contactarnos! Te responderemos pronto.";
    mensaje.style.color = "#004679";
    mensaje.style.fontWeight = "bold";
    mensaje.style.marginTop = "20px";
    mensaje.style.textAlign = "center";

    // Evita duplicar el mensaje si ya existe
    const anterior = form.parentElement.querySelector(".mensaje-exito");
    if (anterior) anterior.remove();

    mensaje.classList.add("mensaje-exito");
    form.parentElement.appendChild(mensaje);

    // Desaparece después de 5 segundos
    setTimeout(() => {
      mensaje.remove();
    }, 5000);
  });
});
