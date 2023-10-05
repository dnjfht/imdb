export default function SearchBox() {
  return (
    <form className="flex max-w-6xl mx-auto justify-between items-center px-5">
      <input
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
        type="text"
        placeholder="Search keywords..."
      />
      <button className="text-emerald-400 disabled:text-gray-400" type="submit">
        Search
      </button>
    </form>
  );
}
