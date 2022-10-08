function create(data, options = []) {
  return options.map((option) => `<td>${data[option]}</td>`).join("")
}

function createTable(header = [], datas = [], options = []) {
  const headerHTML = header.map((head) => `<th>${head}</th>`)

  const startHTMLTable = `
    <table>
      <thead>
        <tr>
          ${headerHTML.join("\n")}
        </tr>
      </thead>
      <tbody>`;
  const endHTMLTable = `
      </tbody>
    </table>
  `;

  const lineHTMLTable = datas.map((data) => `<tr>${create(data, options)}</tr>`)

  return `${startHTMLTable}${lineHTMLTable.join("")}${endHTMLTable}`
}

export { createTable }