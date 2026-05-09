const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;


  // Exemplo prático
const formulario = document.querySelector("#enviar");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão

  const formData = new FormData(formulario);
  const dados = Object.fromEntries(formData);
  
  console.log("Dados enviados:", dados);
  // Aqui você pode enviar para um servidor com fetch()
});


const botao = document.getElementById("botaoTema");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
