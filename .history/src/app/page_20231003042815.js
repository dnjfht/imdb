const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  console.log(genre);

  return <div className="max-w-6xl sm:mx-auto p-4 space-y-4">HOME</div>;
}
