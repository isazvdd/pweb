export default function Movies({ data }) {
  return (
    <div>
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
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=9b30f837&t=movie&y=2022`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
