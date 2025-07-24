document.addEventListener('DOMContentLoaded', function() {
    // Elementos da página
    const botaoRevelar = document.getElementById("botao-revelar");
    const telaInicial = document.getElementById("tela-inicial");
    const backgroundWrapper = document.querySelector(".background-wrapper");
    const bgHeart = document.querySelector(".bg_heart");
    const container = document.querySelector(".container");
    const textElement = document.getElementById("text1");
    const musica = document.getElementById("musica-fundo");  // pegar o áudio

    let i = 0;
    const text = "PARA MINHA NANINHA QUERIDA ❤️";
    const speed = 100;

    // Função de digitação
    function typeWriter() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    // Função dos corações
    function iniciarCoracoes() {
        setInterval(function() {
            let r_size = Math.floor(Math.random() * 65) + 10;
            let r_left = Math.floor(Math.random() * 100) + 1;
            let r_bg = Math.floor(Math.random() * 25) + 100;
            let r_time = Math.floor(Math.random() * 5) + 5;

            let span = document.createElement("span");
            span.className = "heart";
            span.style.width = r_size + "px";
            span.style.height = r_size + "px";
            span.style.left = r_left + "%";
            span.style.background = "rgba(255," + (r_bg - 25) + "," + r_bg + ",0.8)";
            span.style.animationDuration = r_time + "s";
            bgHeart.appendChild(span);

            setTimeout(() => {
                span.remove();
            }, r_time * 1000);
        }, 500);
    }

    // Evento de clique no botão para revelar o conteúdo
    botaoRevelar.addEventListener("click", function() {
        // Esconde a tela inicial com uma transição suave
        telaInicial.style.transition = "opacity 0.5s ease";
        telaInicial.style.opacity = "0";
        setTimeout(() => {
            telaInicial.style.display = "none";
        }, 500);

        // Mostra o conteúdo principal
        backgroundWrapper.classList.remove("hidden");
        bgHeart.classList.remove("hidden");
        container.classList.remove("hidden");

        // Inicia as animações
        typeWriter();
        iniciarCoracoes();

        // Toca a música removendo o mute e dando play
        if (musica) {
            musica.muted = false;
            musica.play();
        }
    });
});
