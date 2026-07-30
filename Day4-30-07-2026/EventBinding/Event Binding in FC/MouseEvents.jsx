function MouseEvents() {
  function enter() {
    console.log("Mouse Entered");
  }
  function leave() {
    console.log("Mouse Left");
  }
  return (
    <>
      <h2
        onMouseEnter={enter}
        onMouseLeave={leave}>
        Hover Here
      </h2>
    </>
  );
}
export default MouseEvents;