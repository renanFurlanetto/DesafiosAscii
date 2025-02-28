document.addEventListener("DOMContentLoaded", function () {
    // Botões da seção de conhecimento
    const botoes = document.querySelectorAll(".buttons button");
    const secoes = document.querySelectorAll(".topics p");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            const idSecao = this.id.replace("Btn", "");
            secoes.forEach(secao => {
                secao.classList.toggle('active', secao.id === idSecao);
            });
        });
    });
    // Animação dos ícones da seção de contatos
    const icons = document.querySelectorAll(".icons img");

    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add("aparecer");
        }, index * 300); // Delay entre cada ícone
    });
});
