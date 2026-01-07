let swiper;
let tocando = true;

function iniciar() {
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("conteudo").classList.remove("hidden");

  document.getElementById("musica").play();

  swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 3500,
    },
  });

  iniciarCoracoes();
}

function iniciarCoracoes() {
  document.querySelectorAll(".coracoes").forEach(container => {
    setInterval(() => {
      const coracao = document.createElement("span");
      coracao.innerText = "💖";
      coracao.style.left = Math.random() * 80 + "%";
      coracao.style.animationDuration = (Math.random() * 2 + 3) + "s";
      container.appendChild(coracao);

      setTimeout(() => coracao.remove(), 4000);
    }, 700);
  });
}

function toggleMusica() {
  const musica = document.getElementById("musica");
  const btn = document.getElementById("btn-musica");

  if (tocando) {
    musica.pause();
    btn.innerText = "🎵 Tocar";
  } else {
    musica.play();
    btn.innerText = "🎵 Pausar";
  }
  tocando = !tocando;
}

function fugir() {
  const botao = document.querySelector(".nao");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  botao.style.transform = `translate(${x}px, ${y}px)`;
}

function aceitou() {
  document.getElementById("final").innerText =
    "AAAA 😍💖 Agora é oficial!!!";
}
function aceitou() {
  // mostra a timeline
  document.getElementById('timeline').classList.remove('hidden');

  // rolagem suave
  document.getElementById('timeline').scrollIntoView({
    behavior: 'smooth'
  });

  iniciarAnimacao();
  digitarTexto();
}

/* ANIMAÇÃO AO ROLAR */
function iniciarAnimacao() {
  const items = document.querySelectorAll('.item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
}

/* TEXTO DIGITANDO */
function digitarTextoFinal() {
  const texto = "Já nos tornamos nós antes, Agora só ta oficializado, EU TE AMO!!! ❤️";
  const elemento = document.getElementById("textoFinalCarrossel");
  let index = 0;

  function escrever() {
    if (index < texto.length) {
      elemento.innerHTML += texto.charAt(index);
      index++;
      setTimeout(escrever, 60);
    }
  }
  escrever();
}
const finalTexto = document.querySelector('.final-carrossel');

const observerFinal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      finalTexto.classList.add('show');
      digitarTextoFinal();
      observerFinal.disconnect(); // evita repetir
    }
  });
}, { threshold: 0.5 });

observerFinal.observe(finalTexto);



