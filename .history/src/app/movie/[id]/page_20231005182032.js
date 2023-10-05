import Image from "next/image";

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
      <div className="rounded-lg">
        <h1>{movie.title || movie.name}</h1>

        <Image
          className="w-[120%] max-w-full h-auto object-cover sm:mb-0 mb-4 sm:rounded-t-lg rounded-t-xl group-hover:opacity-80 transition-opacity duration-500 mx-auto"
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="movie_poster"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
      </div>
    </div>
  );
}
