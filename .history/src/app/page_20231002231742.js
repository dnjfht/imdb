const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Home({ searchParams }) {
  console.log(searchParams);
  return <div className="max-w-6xl sm:mx-auto p-4 space-y-4">HOME</div>;
}
