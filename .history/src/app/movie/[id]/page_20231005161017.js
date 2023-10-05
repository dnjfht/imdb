async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return await res.json();
}

export default async function Movie({ params }) {
  // console.log(movie);

  return (
    <div>
      <h1>{params}</h1>
    </div>
  );
}
