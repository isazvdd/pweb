let beers = [
    {
      name: "Guiness", 
      alcohol: "10%", 
      style: "Red Ale",
      ibu: "15",    
    }, 

    {
      name: "Desperados",
      alcohol: "6%",
      style: "English IPA",
      ibu: "16", 
    }, 

    {
      name: "Becks",
      alcohol: "5%", 
      style: "Imperial Stout",
      ibu: "17",
    }
]

//cs é um array de cervejas
const carregarDiv = (cs, id="cervejasDiv", header = ["Nome", "Álcool", "Estilo", "Amargor"]) => {
  const div = document.getElementById(id)
  const headerHTML = header.map((head) => `<th>${head}</th>`)
  const startHTMLTable = `
      <table>
        <thead>
          <tr>
            ${headerHTML.join("\n")}
          </tr>
        </thead>
      <tbody>`

  const endHTMLTable = `
        </tbody>
      </table>
  `

  const createTableData = (beer) => {
    const key = Object.keys(beer)
    return key.map((keyss) => `<td>${beer[keyss]}</td>`).join("\n")
  }

  const itensHTML = cs.map((ale) => {
    return `<tr>${createTableData(ale)}</tr>`
  })

  div.innerHTML = startHTMLTable + `${itensHTML.join("\n")}` + endHTMLTable
}

let botao = document.getElementById("botaoCarregar")

botao.addEventListener("click", () => carregarDiv(beers))     
