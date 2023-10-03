import Image from "next/image";

export default function MovieCards({ movie }) {
  return (
    <div>
      <Image src={movie.poster_path} alt="movie_poster" />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>media_type : {movie.media_type}</p>
      <p>{movie.popularity}</p>
      <p>{movie.vote_average}</p>
      <p>{movie.vote_count}</p>
    </div>
  );
}
