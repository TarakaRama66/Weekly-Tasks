import ButtonChild from "./ButtonChild";

function ButtonParent() {
  const receiveMessage = (message) => {
    console.log("Received:", message);
  };

  return <ButtonChild sendData={receiveMessage} />;
}

export default ButtonParent;