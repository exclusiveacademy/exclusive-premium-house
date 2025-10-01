
document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector(".contact form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Xabaringiz yuborildi! Tez orada siz bilan bog‘lanamiz.");
      form.reset();
    });
  }


  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  let index = 0;

  function showSlide(i) {
    if (!slides || images.length === 0) return; 
    if (i < 0) index = images.length - 1;
    else if (i >= images.length) index = 0;
    else index = i;

    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  if (prev && next) {
    prev.addEventListener("click", () => showSlide(index - 1));
    next.addEventListener("click", () => showSlide(index + 1));
  }


  if (images.length > 0) {
    setInterval(() => showSlide(index + 1), 5000);
  }

 
  const buttons = document.querySelectorAll(".btn, .contact button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.style.transform = "scale(0.95)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 150);
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector(".contact form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Xabaringiz yuborildi! Tez orada siz bilan bog‘lanamiz.");
      form.reset();
    });
  }

 
  const footerLinks = document.querySelectorAll("footer a");
  footerLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.transition = "0.3s";
      link.style.color = "#f1c40f";
    });
    link.addEventListener("mouseout", () => {
      link.style.color = "";
    });
  });
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100; 

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
