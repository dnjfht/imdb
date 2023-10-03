import { revalidateTag } from "next/cache";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  console.log(genre);

  const res = await fetch(
    `'https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();

  return <div className="max-w-6xl sm:mx-auto p-4 space-y-4">HOME</div>;
}
