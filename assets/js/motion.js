gsap.registerPlugin(ScrollTrigger);

// Esperamos a que el contenido cargue para calcular bien las alturas
window.addEventListener("load", () => {
  
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach((shape, i) => {
    // Animación de Scroll con Inercia (Rebote)
    gsap.to(shape, {
      y: i % 2 === 0 ? -150 : 150, // Unas suben, otras bajan
      rotation: i % 2 === 0 ? 20 : -20,
      ease: "none", 
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2, // <--- Este número alto crea el efecto de "persecución" y rebote
        invalidateOnRefresh: true
      }
    });

    // Animación extra: Flotación infinita (Drift)
    // Esto se suma al movimiento del scroll
    gsap.to(shape, {
      y: "+=20",
      duration: 3 + i,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });
});

