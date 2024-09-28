// script.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn-number');
    const clearButton = document.getElementById('clear');
    const confirmButton = document.getElementById('confirm');
    const successMessage = document.getElementById('successMessage');
    const confettiContainer = document.getElementById('confettiContainer');

    let voteNumber = '';

    // Função para atualizar o display
    function updateDisplay() {
        display.textContent = voteNumber.padEnd(5, '_').split('').join(' ');
    }

    // Função para adicionar número
    function enterNumber(num) {
        if (voteNumber.length < 5) {
            voteNumber += num;
            updateDisplay();
        }
    }

    // Função para limpar o display
    function clearNumber() {
        voteNumber = '';
        updateDisplay();
    }

    // Função para confirmar o voto
    function confirmVote() {
        if (voteNumber === '10100') {
            successMessage.style.display = 'block';
            createConfetti();
        } else {
            alert('Número inválido. Tente novamente.');
            clearNumber();
        }
    }

    // Função para criar confetes
    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.backgroundColor = getRandomGreenShade();
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confettiContainer.appendChild(confetti);

            // Remover confete após a animação
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    }

    // Função para obter tons aleatórios de verde
    function getRandomGreenShade() {
        const shades = ['#1b5e20', '#388e3c', '#66bb6a', '#a5d6a7', '#81c784'];
        return shades[Math.floor(Math.random() * shades.length)];
    }

    // Adicionar eventos aos botões numéricos
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const num = button.getAttribute('data-num');
            enterNumber(num);
        });
    });

    // Eventos para botões de ação
    clearButton.addEventListener('click', clearNumber);
    confirmButton.addEventListener('click', confirmVote);
});
