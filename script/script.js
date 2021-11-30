const Inciar_Game = document.getElementById("BtnIniciarJogo");
let Pontos = 0;
let Pontuacao = document.getElementById("Pontuacao");
let Contador = 0
let Vidas_Totais = document.getElementById("Vidas");
let Vidas_Restantes = 0;
let container = document.getElementById("container");
let Tempo = document.getElementById("Tempo");
let Tempo_Restante = 60;

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
   Vidas_Restantes +=1;
 return (Pontuacao.innerHTML = `<h2>Pontuação: ${Pontos}</h2>`);
 
}

function Errou(){
   Vidas_Restantes -= 1;

   if(Vidas_Restantes <= 0){
     Vidas_Restantes = 0;
     return (Vidas_Totais.innerHTML = `<h2>Vidas: ${Vidas_Restantes} </h2>`);
   }else {
     return (Vidas_Totais.innerHTML = `<h2>Vidas: ${Vidas_Restantes}</h2>`);
   }
 


}

function Reset (){
 Contador = 0;
  Pontos = 0;
  Vidas_Restantes = 4;
 Tempo_Restante = 60;
  
}

function Cronometro(){
  Tempo_Restante -= 1
  if(Tempo_Restante <= 0) {
    Tempo_Restante = 0;
    return (Tempo.innerHTML = `<h2>Tempo : ${Tempo_Restante}</h2>`);
  } else {
    return (Tempo.innerHTML = `<h2>Tempo : ${Tempo_Restante}</h2>`);
  }
  
}
function Iniciar_Game() {
 Reset()
 Cronometro();
  container.setAttribute("onclick", "Errou()");
  let intervalo =  setInterval(() => {
       adicionar();
        Cronometro();
       if (Contador === 60 || Vidas_Restantes <= 0) {
           clearInterval(intervalo);
          
           Remover()
            Pontuacao.innerHTML = `<h2>Pontuação: 0 </h2>`;
            alert("fim de jogo para jogar novamente clique em iniciar jogo");
              return
       }
    
    }, 1000);  
}
