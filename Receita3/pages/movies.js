export default function Movies({ data }) {
  return (
    <div>
      {data.Search.map((m) => (
        <div>
          {m.Title} --- {m.Year}
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=47057a09&s=bagdad`);

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
