export default function Movies({ data, search }) {
  return (
    <div>
      <form method="GET" style={{ marginBottom: "10px" }}>
        <input
          type="text"
          name="search"
          placeholder="Pesquise um filme:"
          defaultValue={search}
        ></input>
        <input type="submit" value="Buscar"></input>
      </form>
      {Array.isArray(data.Search) ? (
        data.Search.map((m) => (
          <div>
            <img src={m.Poster}></img>
            <br />
            {m.Title} --- {m.Year}
          </div>
        ))
      ) : (
        <div>
          <img src={data.Poster}></img>
          <br />
          {data.Title} --- {data.Year}
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { search } = context.query;
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=9b30f837&s=` + search
  );
  const data = await res.json();
  return {
    props: {
      data,
      search,
    },
  };
}
