document.addEventListener('DOMContentLoaded', function() {
    // Elementos da página
    const botaoRevelar = document.getElementById("botao-revelar");
    const telaInicial = document.getElementById("tela-inicial");
    const animationOverlay = document.getElementById("animation-overlay");
    const animationText = document.getElementById("animation-text");
    
    const backgroundWrapper = document.querySelector(".background-wrapper");
    const bgHeart = document.querySelector(".bg_heart");
    const container = document.querySelector(".container");
    const finalH2 = document.getElementById("text1");

    // Função para criar uma pausa
    const sleep = ms => new Promise(res => setTimeout(res, ms));

    // Função para mostrar um slide (imagem + texto)
    function showSlide(text, imageUrl) {
        animationText.textContent = text;
        animationOverlay.style.backgroundImage = `url('${imageUrl}')`;
        animationOverlay.classList.remove('hidden');
        setTimeout(() => { animationOverlay.style.opacity = '1'; }, 10);
    }

    // Função para esconder o slide
    function hideSlide() {
        animationOverlay.style.opacity = '0';
        return sleep(500);
    }

    // --- FUNÇÃO DOS CORAÇÕES ATUALIZADA ---
    function iniciarCoracoes() {
        setInterval(function() {
            const r_size = Math.random() * 20 + 15;      // Tamanho da fonte entre 15px e 35px
            const r_left = Math.random() * 100;        // Posição horizontal de 0 a 100%
            const r_time = Math.random() * 4 + 4;        // Duração da animação de 4 a 8 segundos
            const r_delay = Math.random() * 2;       // Atraso de até 2 segundos
            const r_color = Math.random() > 0.5 ? '#ff4757' : '#e84393'; // Alterna entre 2 tons de rosa

            let span = document.createElement("span");
            span.className = "heart";
            span.innerHTML = '♥'; // Usando o caractere de coração

            // Aplicando os estilos aleatórios
            span.style.fontSize = r_size + 'px';
            span.style.color = r_color;
            span.style.left = r_left + '%';
            span.style.animationDuration = r_time + 's';
            span.style.animationDelay = r_delay + 's';
            
            bgHeart.appendChild(span);

            // Remove o coração do HTML depois que a animação terminar
            setTimeout(() => {
                span.remove();
            }, (r_time + r_delay) * 1000);
        }, 200); // Aumentei a frequência para mais corações
    }

    // A sequência principal de animação
    async function startAnimation() {
        // Lembre-se de adicionar a imagem "nana1.jpg" na sua pasta!
        showSlide("vamos apreciar um pouco da beleza da MINHA MULHER", "nana1.jpg");
        await sleep(4000);
        await hideSlide();

        showSlide("olha gente! que bonita é essa MINHA mulher", "nana2.jpg");
        await sleep(4000);
        await hideSlide();

        showSlide("UAUUUUUUUUU 👏👏👏👏👏", "nana3.jpg");
        await sleep(4000);
        await hideSlide();

        // Fim da animação, mostra a tela principal
        backgroundWrapper.classList.remove("hidden");
        bgHeart.classList.remove("hidden");
        container.classList.remove("hidden");
        finalH2.textContent = "APLAUSSOS PFVR ❤️";
        iniciarCoracoes();
    }

    // Evento de clique no botão
    botaoRevelar.addEventListener("click", function() {
        telaInicial.style.transition = "opacity 0.5s ease";
        telaInicial.style.opacity = "0";
        setTimeout(() => { telaInicial.style.display = "none"; }, 500);

        const musica = document.getElementById("musica-fundo");
        if (musica) {
            musica.play();
        }

        startAnimation();
    });
});