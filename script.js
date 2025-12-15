// ===============================
// SCROLL SUAVE DA NAVBAR
// ===============================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===============================
// EFEITO DE BRILHO NOS CARDS
// ===============================
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 10px 20px rgba(26, 115, 232, 0.5)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  });
});

// ===============================
// MODAL DE PRODUTO
// ===============================
function abrirModal(img, titulo, desc, preco, mensagem) {
  const overlay = document.getElementById("modal-overlay");

  document.getElementById("modal-img").src = img;
  document.getElementById("modal-title").textContent = titulo;
  document.getElementById("modal-desc").textContent = desc;
  document.getElementById("modal-price").textContent = preco;

  const link = document.getElementById("modal-link");
  link.href = `https://wa.me/5511966076576?text=${encodeURIComponent(mensagem)}`;

  overlay.classList.add("active");
  document.body.classList.add("no-scroll");
}

function fecharModal() {
  const overlay = document.getElementById("modal-overlay");

  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

// ===============================
// INTRO OVERLAY (TELA INICIAL)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const introOverlay = document.getElementById("intro-overlay");
  const btnVerServicos = document.getElementById("intro-ver-servicos");

  // trava scroll enquanto a intro existe
  document.body.classList.add("no-scroll");

  btnVerServicos.addEventListener("click", () => {
    introOverlay.classList.add("hidden");
    document.body.classList.remove("no-scroll");

    // remove do DOM depois da animação
    setTimeout(() => {
      introOverlay.style.display = "none";

      const servicos = document.getElementById("servicos");
      if (servicos) {
        servicos.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  });
});
