document.addEventListener("DOMContentLoaded", function () {
  const carrusel = document.getElementById("carruselServicios");
  const btnLeft = document.querySelector(".btn-flecha.left");
  const btnRight = document.querySelector(".btn-flecha.right");

  const scrollAmount = 340; // puedes ajustar esto

  btnLeft.addEventListener("click", () => {
    carrusel.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });

  btnRight.addEventListener("click", () => {
    carrusel.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });
});
