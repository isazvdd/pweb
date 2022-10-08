
import { createTable } from "./tables.js";
import { amounts } from "./index.html"

// var i = setInterval(function(){
//     clearInterval(i);
//     document.getElementById("loading").style.display = "none";
//     document.getElementById("content").style.display = "block";
// }, 2000);

let amount = 3;

async function loadBeers(){
    const select = document.getElementById("amounts")
    amount = amounts.value

    try{
        let res =await fetch(`https://random-data-api.com/api/v2/users?size=${amount}`)
        const beer = await res.json()
        const header = ["Nome", "Sobrenome", "Nome de usuário", "Email"]
        const object = ["first_name", "last_name", "username", "email"]
        const div = document.getElementById("beersDiv")
        div.innerHTML = createTable(beer, header, object)
    } catch(err){
        document.getElementById("beersDiv").innerHTML = "Sinto muito, estamos fora do ar! Volte mais tarde."
    }
}

let botao = document.getElementById("loadButton")
botao.addEventListener("click", () => loadBeers())

