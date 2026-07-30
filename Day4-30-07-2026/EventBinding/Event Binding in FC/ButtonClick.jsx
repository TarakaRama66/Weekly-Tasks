function ButtonClick() {
  function handleClick() {
    alert("Button Clicked!");
  }
  return (
    <>
      <h2>Event Binding</h2>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}
export default ButtonClick;