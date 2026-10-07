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

function responsivonav(){
     
        const nav = document.getElementById('navmain');
        let width = window.innerWidth;
        console.log("io")

        if (width <= 768) {
            nav.innerHTML = `<div class="nav-container">
      <input class="checkbox" type="checkbox">

      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>  


         <div class="menu-itemsb">
        <li><a href="index.html">Ínicio</a></li>
        <li><a href="index.html#sobre">Sobre</a></li>
        <li><a href="equipe.html">Equipe</a></li>
        <li><a href="form.html">Participe</a></li>
        <li><a href="#contato">Contatos</a></li>
        <li><a href="doe.html">Doe</a></li>
      </div>

    </div>
    <div class="burgernavalign">
     <div class="header1"><p>SeaWorld</p></div>
    <div class="peixe">
        <img id="botaoTema" src="imagens/peixe.png" style="height: 100%;";>
      </div>
      </div>`;
        } else{
            nav.innerHTML = `<div class="header1"><p>SeaWorld</p></div>
        <div style="display: flex; width:50%; margin-inline: auto;">
        <div class="menu-items"><a href="index.html">Sobre</a></div>
        <div class="menu-items"><a href="#">Equipe</a></div>
        <div class="menu-items"><a href="form.html">Participe</a></div>
        <div class="menu-items"><a href="#contato">Contatos</a></div>
        <div class="menu-items"><a href="doe.html">Doe</a></div>
    </div>
    <div class="peixe">
        <img id="botaoTema" src="imagens/peixe.png" style="height: 100%;";>
      </div>`
        }
}

window.addEventListener('resize', responsivonav);
responsivonav()