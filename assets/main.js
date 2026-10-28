function responsivonav(){
     
        const nav = document.getElementById('navmain');
        let width = window.innerWidth;

        if (width <= 900) {
            nav.innerHTML = `<div class="nav-container">
      <input class="checkbox" type="checkbox">

      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>  


         <div class="menu-itemsb">
        <li><a href="index.html">Ínicio</a></li>
        <hr class="menusplit">
        <li><a href="materias.html">Conteúdos</a></li>
        <hr class="menusplit">
        <li><a href="index.html#sobre">Sobre</a></li>
        <hr class="menusplit">
        <li><a href="equipe.html">Equipe</a></li>
        <hr class="menusplit">
        <li><a href="form.html">Participe</a></li>
        <hr class="menusplit">
        <li><a href="#contato">Contatos</a></li>
        <hr class="menusplit">
        <li><a href="doe.html">Doe</a></li>
        <hr class="menusplit">
        <li><a href="memoria.html">Jogo da Memória</a></li>
      </div>

    </div>
    <div class="burgernavalign">
     <div class="header1"><p>SeaWorld</p></div>
    <div class="peixe">
        <img onclick="toggle()" src="assets/imagens/peixe.png" style="height: 100%;";>
      </div>
      </div>`;
        } else{
            nav.innerHTML = `<div class="header1"><p>SeaWorld</p></div>
        <div style="display: flex; width:50%; margin-inline: auto;">
        <div class="menu-items"><a href="index.html #sobre">Ínicio</a></div>
        <div class="menu-items"><a href="materias.html">Conteúdos</a></div>
        <div class="menu-items"><a href="equipe.html">Equipe</a></div>
        <div class="menu-items"><a href="form.html">Participe</a></div>
        <div class="menu-items"><a href="#contato">Contatos</a></div>
        <div class="menu-items"><a href="doe.html">Doe</a></div>
        <div class="menu-items"><a href="memoria.html">Jogo da Memória</a></div>
    </div>
    <div class="peixe">
        <img onclick="toggle()" src="assets/imagens/peixe.png" style="height: 100%;";>
      </div>`
        }
}

window.addEventListener('resize', responsivonav);
responsivonav()


function toggle() {
dark()
document.body.classList.toggle("dark");
}
function dark() {
    let theme = localStorage.getItem("theme")
            if (theme === "light") {

localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));
console.log(1);

            }
            else if (theme === "dark"){
localStorage.setItem("theme", "light");
console.log(localStorage.getItem("theme"));
console.log(2);

            }
        }
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

function ultrans(href){
         document.querySelector('.trans').querySelectorAll('.tblock').forEach(child => {
    child.style.transform="translate(0px,-"+window.innerHeight+"px)"
  })
            setTimeout(()=>{
window.location.href = href
          },500)
}
function ltrans(){
  document.querySelector('.trans').querySelectorAll('.tblock').forEach(child => {
    child.style.transform="translate(0px,-"+((child.offsetTop)+(20 * (window.innerHeight / 100)))+"px)"
    console.log(child.offsetTop)
  })
  
}
ltrans()


