gsap.registerPlugin(ScrollTrigger);

/* =========================
   SHAPES → SCROLL ALIGN
========================= */

document.querySelectorAll(".shape").forEach(shape => {
  const targetClass = shape.dataset.target;
  const target = document.querySelector(`.${targetClass}`);
  if (!target) return;

  gsap.to(shape, {
    y: () => {
      const rect = target.getBoundingClientRect();
      return rect.top + window.scrollY - window.innerHeight * 0.4;
    },
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  });
});

/* =========================
   SHAPES → FLOATING MOTION
========================= */

gsap.to(".shape", {
  y: "+=18",
  rotation: 8,
  duration: 4,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
  stagger: 0.3
});

/* =========================
   PROJECT CARDS (MOBILE TAP)
========================= */

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("touchstart", () => {
    card.classList.toggle("is-active");
  });
});

/* =========================
   SUBTLE PARALLAX (HOME PIECES)
========================= */

const pieces = document.querySelectorAll(".piece");

if (pieces.length) {
  window.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;

    pieces.forEach((piece, i) => {
      piece.style.transform = `translate(${x * (i + 1) * 0.6}px, ${y * (i + 1) * 0.6}px)`;
    });
  });
}

const bgSections = document.querySelectorAll("[data-bg]");

bgSections.forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 80%",
    end: "top 30%",
    scrub: true,
    onUpdate: () => {
      const bg = section.dataset.bg;
      const theme = section.dataset.theme || "light";

      gsap.to("body", {
        backgroundColor: bg,
        duration: 0.2,
        overwrite: "auto"
      });

      document.body.classList.toggle("is-dark", theme === "dark");
      document.body.classList.toggle("is-light", theme === "light");
    }
  });
});


document.getElementById("enter").addEventListener("click", () => {
  const pwd = document.getElementById("password").value;

  if (pwd === "CAMBIAESTO") {
    document.getElementById("password-gate").style.display = "none";
    document.getElementById("eaad-project").style.display = "block";
    document.body.style.overflow = "auto";
  } else {
    document.getElementById("error").style.display = "block";
  }
});


gsap.registerPlugin(ScrollTrigger);

gsap.to(".project-hero-image", {
  y: -80,
  ease: "none",
  scrollTrigger: {
    trigger: ".project-hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".reveal", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".reveal",
    start: "top 95%",
    toggleActions: "play none none none"
  }
});

