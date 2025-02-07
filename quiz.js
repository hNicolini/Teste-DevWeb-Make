
const botãocerto = document.getElementById("btn_v");
const botãoerrado = document.getElementById("btn");
const botãoerrado2 = document.getElementById("btn2");
const botãoerrado3 = document.getElementById("btn3");


function correto() {
    botãocerto.style.backgroundColor = "green";
}

function errado() {
    botãoerrado.style.backgroundColor = "red";
    botãoerrado2.style.backgroundColor = "red";
    botãoerrado3.style.backgroundColor = "red";
    botãocerto.style.backgroundColor = "green";
}



botãocerto.addEventListener('click', correto);

botãoerrado.addEventListener('click', errado);
botãoerrado2.addEventListener('click', errado);

if (botãocerto.style.backgroundColor == "green"){
    getElementById('but_2').addEventListener('click', );
    

}
function pagina2() {
        window.location.href = "quiz2.html";
    }