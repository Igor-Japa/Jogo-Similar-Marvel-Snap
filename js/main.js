const eCarta = document.querySelectorAll(".carta");
const eSlot = document.querySelectorAll(".slot_carta")
let energia = Number(document.querySelector("#energia").children[0].innerHTML);
const pontos_jogador = document.querySelectorAll(".pontos_jogador");


let arrastado = null;
let origemCarta = null;

for (let i = 0; i < eCarta.length; i++) {
    eCarta[i].addEventListener("dragstart", comecaArrastar);
}

for (let i = 0; i < eSlot.length; i++) {
    eSlot[i].addEventListener("dragover",passouPorCima);
    eSlot[i].addEventListener("drop",recebeAlgo);
}

function comecaArrastar (evento){
    arrastado=evento.target;
    origemCarta = arrastado.parentElement;
    console.log(origemCarta);
}

function passouPorCima (evento){
    evento.preventDefault();
}

function recebeAlgo (evento){
    evento.target.appendChild(arrastado);
    arrastado = null;
}