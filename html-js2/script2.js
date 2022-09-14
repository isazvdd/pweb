let cervejas = ["Guiness", "Desperados", "Becks", "Stella Artois", "Eisenbahn", "Cacildis", "Hoegaarden"]

function transformar(item){
  //return `<div class="container">${item}</div>`
  return `<tr><td>${item}</td></tr>`
}

function carregarDiv(){
  let div = document.getElementById("cerveja")
  //div.innerHTML = `<h1>${cervejas}</h1>`

  let cervejasHTML = cervejas.map(transformar)
  div.innerHTML = `<table>${cervejasHTML.join('\n')}</table>`

  let botaoOrdenar = document.getElementById("botaoOrdenar")
  botaoOrdenar.style.display = 'inline-block'

  let botaoEmbaralhar = document.getElementById("botaoEmbaralhar")
  botaoEmbaralhar.style.display = 'inline-block'
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", carregarDiv)

let botaoOrdenar = document.getElementById("botaoOrdenar")
botaoOrdenar.addEventListener("click", () => {
  cervejas.sort();
  carregarDiv();
})

let botaoEmbaralhar = document.getElementById("botaoEmbaralhar")
botaoEmbaralhar.addEventListener("click", () =>{
  cervejas.sort(()=> Math.random() - 0.5);
  carregarDiv();
})

var button = document.querySelector(".b1")
var button2 = document.querySelector(".b2")

button.onclick = function() {  
  //button2.style.display = "block";
 }