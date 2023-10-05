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
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          className="max-w-full w-full h-[100%] object-cover rounded-lg"
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="movie_poster"
          placeholder="blur"
          blurDataURL="/spinner.svg"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview : </span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released : </span>
            {movie.release_date || movie.air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating : </span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
