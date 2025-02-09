
const botãocerto = document.getElementById("btn_v");
const botãoerrado = document.getElementById("btn");
const botãoerrado2 = document.getElementById("btn2");
const botãoerrado3 = document.getElementById("btn3");
function redirecionar2() {
    if (podeRedirecionar) {
        window.location.href = "quiz2.html";
    }
}

function voltar(){
    window.location.href = "quiz2.html";
}
function redirecionar1(){
    window.location.href = "quiz.html";
}
function redirecionar3() {
    if (podeRedirecionar) {
        window.location.href = "quiz3.html";
    }
}

function seta2(){
    window.location.href = "quiz.html";
}
function seta3(){
    window.location.href = "quiz2.html";
}

function correto() {
    botãocerto.style.backgroundColor = "green";
}

function errado() {
    botãoerrado.style.backgroundColor = "red";
    botãoerrado2.style.backgroundColor = "red";
    botãoerrado3.style.backgroundColor = "red";
    botãocerto.style.backgroundColor = "green";
}


let podeRedirecionar = false;

function habilitarRedirecionamento() {
    podeRedirecionar = true;
}

botãocerto.addEventListener('click', correto);
botãoerrado.addEventListener('click', errado);
botãoerrado2.addEventListener('click', errado);
botãoerrado3.addEventListener('click', errado);


const pagina2 = document.getElementById('but_2');

if (podeRedirecionar == true) {
    pagina2.addEventListener('click', redirecionar);
}

function finalizar() {
    if (podeRedirecionar == true){
        window.location.href = "final.html";
}
}