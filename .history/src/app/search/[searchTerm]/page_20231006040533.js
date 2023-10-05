export default function SearchPage(props) {
  console.log(props.params.searchTerm);
  return <div>{props.params.searchTerm}</div>;
}
