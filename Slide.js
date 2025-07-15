document.addEventListener("DOMContentLoaded", () => {
  let counter = 1;
  const totalSlides = 4;

  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  function updateSlide() {
    const radio = document.getElementById("slide" + counter);
    if (radio) radio.checked = true;
  }

  // Autoavance cada 5 segundos
  let autoSlide = setInterval(() => {
    counter++;
    if (counter > totalSlides) counter = 1;
    updateSlide();
  }, 3000);

  // Botón siguiente
  nextBtn.addEventListener("click", () => {
    counter++;
    if (counter > totalSlides) counter = 1;
    updateSlide();
    resetInterval();
  });

  // Botón anterior
  prevBtn.addEventListener("click", () => {
    counter--;
    if (counter < 1) counter = totalSlides;
    updateSlide();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      counter++;
      if (counter > totalSlides) counter = 1;
      updateSlide();
    }, 5000);
  }
});

