import Image from "next/image";
import Link from "next/link";

import { PiThumbsUpDuotone } from "react-icons/pi";

export default function MovieCards({ movie }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 mb-10 group">
      <Link href={`/movie/${movie.id}`}>
        <Image
          className="w-[120%] max-w-full h-auto object-cover sm:mb-0 mb-4 sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-500 mx-auto"
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
          <p className="line-clamp-2 text-md sm:mb-0 mb-2">{movie.overview}</p>
          {/* truncate : 글자를 한 줄로 유지하는 tailwind css 명령어 */}
          <h2 className="truncate text-lg font-bold sm:mb-0 mb-2">
            {movie.title || movie.name}
          </h2>
          <p className="flex items-center">
            {movie.release_date || movie.first_air_date}
            <PiThumbsUpDuotone className="h-5 mr-1 ml-3" />
            {movie.vote_count}
          </p>
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

// 아니면 함수를 직접 만들어도 됨. 근데 이렇게 해주면 화면 해상도에 따라 줄이 달라짐.
// export function shortenText(text, num) {
//   return text.slice(0, num) + "...";
// }
