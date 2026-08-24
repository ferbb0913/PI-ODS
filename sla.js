document.getElementById("botao1").addEventListener("click", function() {
    alert("ação de SLA foi acionada!");
    

});



document.getElementById("botao2").onclick = function() {

if
(demo2.innerHTML == "Me desculpa, mas eu não consigo conviver a pessoa horrível que vc é"){
demo2.innerHTML = "mudar texto";
}

else {
 demo2.innerHTML = "Me desculpa, mas eu não consigo conviver a pessoa horrível que vc é";  
}

}


  document.getElementById("botao3").onclick = function() {

   if (demo2.style.fontSize == "20px") {
        demo2.style.fontSize = "50px";
   }

   else {
        demo2.style.fontSize = "20px";
   }

}
 document.getElementById("botao5").onclick = function() {

    if (demo2.style.color == "white") {
       (demo2.style.color = "black"); 
    }

    else {
        
        demo2.style.color = "white";
    }

}


function MensagemAleatoria() {

alert("Mensagem aleatória: " + Math.floor(Math.random() * 100));

}

function apresentaUser( ){
    let nome = prompt("Digite seu nome:");
    alert("Olá, " + nome + "! Bem-vindo ao meu site.");
    
    let idade = prompt("Digite sua idade:");
    if (idade < 18) {
        
        alert("Você é tão madura para a sua idade...Malicioso");
        document.getElementById("demo6").innerHTML = nome ;
        demo3.innerHTML = "Você é tão madura para a sua idade...Malicioso";
        document.section.style.backgroundColor = " background: #8ca7ff;"
        
    }
    else{

        (idade >= 18)
        alert("Ta velha já");
        demo3.innerHTML = "Ta velha já";
    }
    
}

function executartudo() {

    somar();
    diminuir();
    multiplicar();
    dividir();
}

function somar() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = num1 + num2;

    document.getElementById("num3").value = num3;
}

function diminuir() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = num1 - num2;

    document.getElementById("num3").value = num3;
}

function multiplicar() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = num1 * num2;

    document.getElementById("num3").value = num3;
}

function dividir() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = num1 / num2;

    document.getElementById("num3").value = num3;
}
       
function popup() {
  document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

  function calculardias() {
            let dataEscolhida =
             new Date(document.getElementById("dataescolhida").value);
            let hoje = new Date();
            let diferença =
             dataEscolhida - hoje;
            let dias =
            Math.ceil(diferença / (1000 * 60 * 60 * 24));
 
            document.getElementById("resultado").innerHTML = "Faltam " + dias + " dias para a data escolhida.";
        }