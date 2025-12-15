document.body.classList.add("no-scroll");

// Scroll suave para links de navegação
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Efeito simples de brilho nos cards ao passar o mouse
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 10px 20px rgba(26, 115, 232, 0.5)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  });
});

function abrirModal(img, titulo, desc, preco, mensagem) {
  const overlay = document.getElementById("modal-overlay");

  document.getElementById("modal-img").src = img;
  document.getElementById("modal-title").textContent = titulo;
  document.getElementById("modal-desc").textContent = desc;
  document.getElementById("modal-price").textContent = preco;

  const link = document.getElementById("modal-link");
  link.href = `https://wa.me/5511966076576?text=${encodeURIComponent(mensagem)}`;

  overlay.classList.add("active");
  document.body.classList.add("modal-open");
}

function fecharModal() {
  const overlay = document.getElementById("modal-overlay");

  overlay.classList.remove("active");
  document.body.classList.remove("modal-open");
}


// Selecionando o botão "Ver Serviços" e a seção da Hero
const btnServicos = document.getElementById('btn-servicos');
const heroSection = document.getElementById('inicio');

document.addEventListener("DOMContentLoaded", () => {
const introOverlay = document.getElementById("intro-overlay");
const btnVerServicos = document.getElementById("intro-ver-servicos");

btnVerServicos.addEventListener("click", () => {
  introOverlay.classList.add("hidden");
  document.body.classList.remove("no-scroll");
});


    
    document
      .getElementById("servicos")
      .scrollIntoView({ behavior: "smooth" });
  });
