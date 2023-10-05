async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return await res.json();
}

export default async function Movie(props) {
  const movieId = props.params.id;
  console.log(props.params);
  const movie = await getMovie(movieId);

  console.log(movie);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto">
        <h1>{movie.title || movie.name}</h1>
      </div>
    </div>
  );
}
