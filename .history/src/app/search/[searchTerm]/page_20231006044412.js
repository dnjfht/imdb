import MovieCards from "@/app/components/MovieCards";

export default async function SearchPage(props) {
  console.log(props.params.searchTerm);

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${props.params.searchTerm}`
  );
  const searchResult = await res.json();

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* {searchResult &&
        searchResult.map((movie) => {
          return <MovieCards key={movie.id} movie={movie} />;
        })} */}
    </div>
  );
}
