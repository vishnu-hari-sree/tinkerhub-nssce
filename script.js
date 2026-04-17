document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    el.style.opacity = 1;
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});