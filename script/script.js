const Inciar_Game = document.getElementById("BtnIniciarJogo");
let Pontos = 0;
let Pontuacao = document.getElementById("Pontuacao");
let Contador = 0;
let Vidas_Totais = document.getElementById("Vidas");
let Vidas_Restantes = 0;
let container = document.getElementById("container");
let Tempo = document.getElementById("Tempo");
let Tempo_Restante = 60;
let Iniciar_Container = document.getElementById("Iniciar");
let Dificuldade = document.getElementById("Dificuldade");

Pontuacao.innerHTML = `<h2>Pontuação: ${Pontos}</h2>`;
Vidas_Totais.innerHTML = `<h2>Vidas: ${Vidas_Restantes}</h2>`;
Tempo.innerHTML = `<h2>Tempo : ${Tempo_Restante}</h2>`;

const Largura = window.innerWidth - 150;
const Altura = window.innerHeight - 150;

const vampiro = document.createElement("img");

function adicionar() {
  Contador += 1;

  vampiro.style.left = `${Math.floor(Math.random() * Largura)}px`;
  vampiro.style.top = `${Math.floor(Math.random() * Altura)}px`;

  document.body.appendChild(vampiro);
  vampiro.setAttribute("onclick", "Remover();");

  return (vampiro.src = "./img/vampiro.png");
}

function Remover() {
  vampiro.remove();
  Pontos += 1;
  Vidas_Restantes += 1;
  return (Pontuacao.innerHTML = `<h2>Pontuação: ${Pontos}</h2>`);
}

function Errou() {
  Vidas_Restantes -= 1;

  if (Vidas_Restantes <= 0) {
    Vidas_Restantes = 0;
    return (Vidas_Totais.innerHTML = `<h2>Vidas: ${Vidas_Restantes} </h2>`);
  } else {
    return (Vidas_Totais.innerHTML = `<h2>Vidas: ${Vidas_Restantes}</h2>`);
  }
}

function Reset() {
  Contador = 0;
  Pontos = 0;
  Vidas_Restantes = 4;
  Tempo_Restante = 60;
  
}

function Cronometro() {
  Tempo_Restante -= 1;
  if (Tempo_Restante <= 0) {
    Tempo_Restante = 0;
    return (Tempo.innerHTML = `<h2>Tempo : ${Tempo_Restante}</h2>`);
  } else {
    return (Tempo.innerHTML = `<h2>Tempo : ${Tempo_Restante}</h2>`);
  }
}
function Nivel_De_Dificuldade() {
  let intervalo;

  switch (Dificuldade.value) {
    case "Facil":
      intervalo = setInterval(() => {
        adicionar();
        Cronometro();
        if (Contador === 60 || Vidas_Restantes <= 0) {
          clearInterval(intervalo);

          Remover();
          Reset()
          container.removeAttribute("onclick");
          Iniciar_Container.classList.remove("none");
          Pontuacao.innerHTML = `<h2>Pontuação: 0 </h2>`;
          alert("fim de jogo para jogar novamente clique em iniciar jogo");
          return;
        }
      }, 3000);
      break;

    case "Normal":
      intervalo = setInterval(() => {
        adicionar();
        Cronometro();
        if (Contador === 60 || Vidas_Restantes <= 0) {
          clearInterval(intervalo);

          Remover();
          Reset()
          container.removeAttribute("onclick");
          Iniciar_Container.classList.remove("none");
          Pontuacao.innerHTML = `<h2>Pontuação: 0 </h2>`;
          alert("fim de jogo para jogar novamente clique em iniciar jogo");
          return;
        }
      }, 2000);
      break;

    case "Dificil":
      intervalo = setInterval(() => {
        adicionar();
        Cronometro();
        if (Contador === 60 || Vidas_Restantes <= 0) {
          clearInterval(intervalo);

          Remover();
          Reset()
          Iniciar_Container.classList.remove("none");
          Pontuacao.innerHTML = `<h2>Pontuação: 0 </h2>`;
          alert("fim de jogo para jogar novamente clique em iniciar jogo");
          return;
        }
      }, 1000);
      break;

    
  }
}
function Iniciar_Game() {
 

  
  if(Dificuldade.value === "Nada"){
      alert("Escolha uma dificuldade  antes de iniciar o jogo ");
      return;
  } else {
    container.setAttribute("onclick", "Errou()");
    
     Nivel_De_Dificuldade();
     Iniciar_Container.classList.add("none");
     Reset();
     Cronometro();
  }
}

