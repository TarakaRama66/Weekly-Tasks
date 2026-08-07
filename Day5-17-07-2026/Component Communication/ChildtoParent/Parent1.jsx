import Child from "./Child";

function Parent1() {
  const showMessage = (message) => {
    alert(message);
  };
  return (
    <div>
        <h1>Child to Parent Communication</h1>
        <Child sendMessage={showMessage} />
    </div>
  );
}
export default Parent1;