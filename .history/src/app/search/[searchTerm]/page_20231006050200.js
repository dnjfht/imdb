import MovieCards from "@/app/components/MovieCards";

export default async function SearchPage(props) {
  console.log(props.params.searchTerm);

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${props.params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  // 전에 만들어둔 error.jsx 파일이 자동 적용됨.
  // 만약, SearchPage에만 따로 error를 적용시키고 싶다면 이 파일과 동등한 위치에 error.jsx를 생성하여야 함.

  const data = await res.json();
  const results = data.results;

  return (
    <div className="px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results && results.length === 0 && (
        <h1 className="w-full text-center pt-6">No results found.</h1>
      )}

      {results &&
        results.map((movie) => {
          return <MovieCards key={movie.id} movie={movie} />;
        })}
    </div>
  );
}
