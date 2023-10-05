import Image from "next/image";
import Link from "next/link";

export default function MovieCards({ movie }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="movie_poster"
        />

        <div>
          <p>{shortenText(movie.overview, 32)}</p>
          <h1>{movie.title}</h1>
          <p>{movie.release_date}</p>
          <p>{movie.vote_count}</p>
        </div>
      </Link>
    </div>
  );
}

export function shortenText(text, num) {
  return text.slice(0, num) + "...";
}
