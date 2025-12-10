const tabs = document.querySelectorAll(".tab");
const conteudo = document.getElementById("conteudo");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        document.querySelector(".tab.active")?.classList.remove("active");
        tab.classList.add("active");

        const status = tab.getAttribute("data-tab");

        conteudo.innerHTML = "";
    });
});
