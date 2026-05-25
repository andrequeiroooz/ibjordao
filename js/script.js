/* =========================================
   SCRIPTS DA PÁGINA (Vanilla JS)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Selecionando os elementos do Menu Mobile
    const btnMenu = document.getElementById('btn-menu');
    const navMenu = document.getElementById('nav-menu');
    const menuLinks = document.querySelectorAll('.nav-menu a');

    // 2. Evento para abrir/fechar o menu ao clicar no botão "Hamburguer"
    btnMenu.addEventListener('click', () => {
        // A função 'toggle' adiciona a classe 'active' se ela não existir, ou remove se já existir.
        navMenu.classList.toggle('active');
    });

    // 3. Fechar o menu mobile automaticamente após clicar em um dos links
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove a classe 'active' recolhendo o menu no celular
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});