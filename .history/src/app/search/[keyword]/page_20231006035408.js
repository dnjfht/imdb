export default function Search(props) {
  console.log(props);
  return <div>{props.params.keyword}</div>;
}
