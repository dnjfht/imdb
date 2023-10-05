export default function SearchPage(props) {
  console.log(props.params.searchTerm);
  return (
    <div className="max-w-6xl mx-auto px-6">{props.params.searchTerm}</div>
  );
}
