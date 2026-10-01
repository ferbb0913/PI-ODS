
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
