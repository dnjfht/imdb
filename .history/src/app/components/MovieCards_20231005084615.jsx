import Image from "next/image";
import Link from "next/link";

export default function MovieCards({ movie }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 group">
      <Link href={`/movie/${movie.id}`}>
        <Image
          className="max-w-full h-auto object-cover sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-500"
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="movie_poster"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />

        <div>
          <p className="text-md">{shortenText(movie.overview, 62)}</p>
          <h1>{movie.title}</h1>
          <p>{movie.release_date}</p>
          <p>{movie.vote_count}</p>
        </div>
      </Link>
    </div>
  );
}

// 글자를 단축해주는 library를 사용해도 됨.
// Multi-line truncation with @tailwindcss/line-clamp
// npm install -D @tailwindcss/line-clamp
// module.exports = {
//   ...
//   plugins: [
//     ...
//     require('@tailwindcss/line-clamp'),
//   ],
// }
// 그리고 className="line-clamp-2" 이런 식으로 선언해주면 됨. 2줄 단축 예시임.

export function shortenText(text, num) {
  return text.slice(0, num) + "...";
}
