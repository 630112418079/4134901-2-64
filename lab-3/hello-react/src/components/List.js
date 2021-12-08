const number = [5, 2];
const text = (
  <>
    {name.length> 3 && (
    <h1 className="red" id="test">
      Hello World !!!{" "}
    </h1>
    )}
    {number[0] + number[1]}
  </>
);

//stateless
function missValue()
      return "missed !!";
function List{
  list() {
  return number.length > 3 ? text : missValue;
}

export default List;
