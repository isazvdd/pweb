let bebidas = ["Gordon's", "Bulldog", "Hendrick's", "Beefeater", "Tanqueray", "Bombay Sapphire", "Ginaissance", "Plymouth", "The Botanist", "Roku Gin", "Monkey 47", "Ginsmiths Greenhook"]

  // const transformar = item => {
  //   return `<h1>${item}</h1>`
  // }  

const carregarDiv = (gin) =>{
  const div = document.getElementById('gin')
  // const ginsHTML = gins.map(transformar)
  const ginHTML = gin.map((item) => `<tr><td>${item}</td></tr>`)
  div.innerHTML = `<table>${ginHTML.join("\n")}</table>`


  const botaoCarregar = document.getElementById('botaoCarregar')
  
  const botaoOrdenar = document.getElementById('botaoOrdenar')
  botaoOrdenar.style.display = 'inline-block'

  const botaoEmbaralhar = document.getElementById('botaoEmbaralhar')
  botaoEmbaralhar.style.display = 'inline-block'
}


const ordenarOpc = (bebidas) => {
  bebidas.sort();
  carregarDiv(bebidas);
}

const embaralharOpc = (bebidas) => {
  bebidas = bebidas
            .map((drink) => ({drink, sort: Math.random()}))
            .sort((a,b) => a.sort - b.sort)
            .map((item) => item.drink)
  carregarDiv(bebidas)
}


// const botaoOrdenar = document.getElementById("botaoOrdenar")
//     botaoOrdenar.addEventListener("click", () => {
//     gins.sort();
//     carregarDiv();
// })

// const botaoEmbaralhar = document.getElementById("botaoEmbaralhar")
// botaoEmbaralhar.addEventListener("click", () =>{
//   gins.sort(()=> Math.random() - 0.5);
//   carregarDiv();
// })



let botao = document.getElementById('botaoCarregar')
botao.addEventListener('click', () => carregarDiv(bebidas))

const botaoOrdenar = document.getElementById('botaoOrdenar')
botaoOrdenar.addEventListener('click', () => ordenarOpc(bebidas))

const botaoEmbaralhar = document.getElementById('botaoEmbaralhar')
botaoEmbaralhar.addEventListener('click', () => embaralharOpc(bebidas))

var button1 = document.querySelector(".b1")
var button2 = document.querySelector(".b2")

button.onclick = function() { 
  button1.style.display = "block" ;
  button2.style.display = "block";
 }