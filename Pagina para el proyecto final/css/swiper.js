var swiper = new Swiper(".swiper", {
    direction: "horizontal",
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 300,
      modifier: 2, //Tamaño de la imagen principal
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 1000, // Tiempo de espera entre cada slide en milisegundos
        disableOnInteraction: true, // Permite que el autoplay continúe incluso cuando el usuario interactúa con el Swiper
      },
  });