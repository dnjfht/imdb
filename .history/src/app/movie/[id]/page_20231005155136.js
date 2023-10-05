export default async function Movie(props) {
  const movieId = props.params.id;
  console.log(movieId);

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const movie = await res.json();
  console.log(movie);

  return <div></div>;
}
