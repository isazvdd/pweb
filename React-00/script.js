
    ReactDOM.render(
      React.createElement(
        "table",
        { border: ".5" },
        React.createElement(
          "tr",
          null,
          React.createElement("td", null, "Cerveja"),
          React.createElement("td", null, "Gin")
        ),
        React.createElement(
          "tr",
          null,
          React.createElement("td", null, "Hoegaarden"),
          React.createElement("td", null, "Bombay")
        )
      ),
      document.getElementById("web")
    );
