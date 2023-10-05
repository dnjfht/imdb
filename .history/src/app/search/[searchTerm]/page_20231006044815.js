import MovieCards from "@/app/components/MovieCards";

export default async function SearchPage(props) {
  console.log(props.params.searchTerm);

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${props.params.searchTerm}`
  );
  const result = await res.json();
  const searchResult = result.results;

  return (
    <div className="px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {searchResult &&
        searchResult.map((movie) => {
          return <MovieCards key={movie.id} movie={movie} />;
        })}
    </div>
  );
}
