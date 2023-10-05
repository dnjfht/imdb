export default function SearchBox() {
  return (
    <form>
      <input
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
        type="text"
        placeholder="Search keywords..."
      />
      <button className="text-em" type="submit">
        Search
      </button>
    </form>
  );
}
