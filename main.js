
let pos = 1;
let interval=setInterval(avancar, 5000);
function mover(){
    fade(500,1,"fadeover");
clearInterval(interval);
    setTimeout(() => {
    document.getElementById("imgs").src = `imagens/peixe`+pos+`.png`;
    document.getElementById("catia").href =`materia`+pos+`.html`;
    fade(500,0,"fadeover");
}, 700);
interval=setInterval(avancar, 5000);
}
function avancar(){

    pos++;
    if(pos > 6){
        pos = 1;
    }
    mover();
}
function voltar(){
    pos--;
    if(pos < 1){
        pos = 6;
    }
    mover();
}

function fade(ftime,fop,id){
    let count = 0;
let opadd = (fop - Number(document.getElementById(id).style.opacity))/20;
 let interval2 = setInterval(() => {
document.getElementById(id).style.opacity = opadd+Number(document.getElementById(id).style.opacity);
count++;
if(count == 20){
    clearInterval(interval2)
}
}, ftime/20);
}

const botao = document.getElementById("botaoTema");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    dark()
});
        window.onload = function load() {

            let theme = localStorage.getItem("theme")

            if (theme == null) {

                localStorage.setItem("theme", "light");
            }
            console.log(localStorage.getItem("theme"));
            if (theme == "dark"){
document.body.classList.toggle("dark");
            }

        }

        function dark() {
            let theme = localStorage.getItem("theme")
            if (theme == "light") {

localStorage.setItem("theme", "dark");

console.log(localStorage.getItem("theme"));

console.log(1);

            }
            else if (theme == "dark"){

                let theme = localStorage.getItem("theme")

localStorage.setItem("theme", "light");

console.log(localStorage.getItem("theme"));

console.log(2);

            }
        }
