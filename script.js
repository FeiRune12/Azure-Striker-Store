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

function abrirModal(imagem, titulo, descricao, preco, mensagem) {
  const overlay = document.getElementById("modal-overlay");

  document.getElementById("modal-img").src = imagem;
  document.getElementById("modal-title").textContent = titulo;
  document.getElementById("modal-desc").textContent = descricao;
  document.getElementById("modal-price").textContent = preco;

  const texto = encodeURIComponent(mensagem);
  document.getElementById("modal-link").href =
    "https://wa.me/5511966076576?text=" + texto;

  overlay.style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal-overlay").style.display = "none";
}
