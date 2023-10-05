export default function MovieCards({ movie }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg">
      {/*<img src={movie.poster_path} alt="movie_poster" />*/}
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
      <p>media_type : {movie.media_type}</p>
      <p>{movie.popularity}</p>
      <p>{movie.vote_average}</p>
      <p>{movie.vote_count}</p>
    </div>
  );
}
