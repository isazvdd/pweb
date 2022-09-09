function voltarDiv(){
  let div = document.getElementById("cerveja")
  div.style.opacity = 0;
  setTimeout(() => {
    div.innerText = ""
  }, 500)
}

function carregarDiv(){
  let div = document.getElementById("cerveja")
  div.style.opacity = 0

  setTimeout(() => {
    div.innerHTML = `<h1>Guiness</h1>`
    div.style.opacity = 1

    let botao = document.getElementById("botaoCarregar")
    botao.innerText = "Voltar"
    botao.removeEventListener("click", carregarDiv)
    botao.addEventListener("click", voltarDiv)
  }, 500)
}


let botao = document.getElementById("botaoCarregar")
botao.onclick = carregarDiv
botao.addEventListener("click", carregarDiv)