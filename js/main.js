const eCarta = document.querySelectorAll(".carta");
const eSlot = document.querySelectorAll(".slot_carta")
let energia = Number(document.querySelector("#energia").children[0].innerHTML);
const pontos_jogador = document.querySelectorAll(".pontos_jogador");

let arrastado = null;

for (let i = 0; i < eCarta.length; i++) {
    eCarta[i].addEventListener('dragstart', comecaArrastar);
}

for (let i = 0; i < eSlot.length; i++) {
    eSlot[i].addEventListener('dragover',passouPorCima);
    eSlot[i].addEventListener('drop',recebeAlgo);
}

function comecaArrastar (evento){
    arrastado=evento.target;
}

function passouPorCima (evento){
    evento.preventDefault();
}

function recebeAlgo (evento){
    const poder_carta = Number(arrastado.children[1].innerHTML);
    const energia_carta = Number(arrastado.children[0].innerHTML);

    if(evento.target.classList.contains("ocupado") || evento.target.classList.contains("pc")){
        return;
    }
    if(evento.target.classList.contains("slot_carta")){
        if(energia >= energia_carta){
            const campo = Number(evento.target.parentElement.parentElement.getAttribute('value'));
            let pontos = Number(pontos_jogador[campo].innerHTML);
            pontos_jogador[campo].innerHTML = pontos + poder_carta;
            energia = energia - energia_carta;
            document.querySelector("#energia").children[0].innerHTML = energia;
            arrastado.setAttribute('draggable', 'false');

            evento.target.classList.add("ocupado");
            origemCarta.classList.remove("ocupado");
            origemCarta = null;
            evento.target.appendChild(arrastado);
            arrastado = null;
        }else{
            alert("Sem energia!");
        }
    }
    
    arrastado = null;
}