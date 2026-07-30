function DoubleClick() {
  function doubleClick() {
    alert("Double Clicked");
  }

  return (
    <>
      <button onDoubleClick={doubleClick}>Double Click</button>
    </>
  );
}

export default DoubleClick;