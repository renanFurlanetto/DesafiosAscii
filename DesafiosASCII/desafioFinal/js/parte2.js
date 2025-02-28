// script.js

// Função de callback do Intersection Observer
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Quando o elemento entra na tela, adicionamos a classe visible
            entry.target.classList.add('visible');
        }
    });
};

// Criar uma instância do IntersectionObserver
const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5 // O elemento precisa estar 50% visível na tela
});

// Selecionar todas as seções para observação
const sections = document.querySelectorAll('.section');

// Observar cada uma das seções
sections.forEach(section => {
    observer.observe(section);
});
