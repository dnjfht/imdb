export default function MovieCards({ movie }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2">
      {/*<img src={movie.poster_path} alt="movie_poster" />*/}

      <div>
        <p>{shortenText(movie.overview, 20)}</p>
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
        <p>{movie.vote_count}</p>
      </div>
    </div>
  );
}

export const shortenText = (text, num) => {
  return text.split(0, num) + "...";
};
