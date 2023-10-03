import MovieCards from "./components/MovieCards";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Home({ searchParams }) {
  console.log(searchParams);
  const genre = searchParams.genre || "fetchTrending";
  // console.log(genre);

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  // data.results에 배열로 값이 들어 있음.
  const results = data.results;
  // console.log(results);

  return (
    <div className="max-w-6xl sm:mx-auto p-4 space-y-4">
      {results?.map((movie) => {
        return <MovieCards key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
