const eCarta = document.querySelectorAll(".carta");
const eSlot = document.querySelectorAll(".slot_carta")

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
    evento.target.appendChild(arrastado);
    arrastado = null;
}