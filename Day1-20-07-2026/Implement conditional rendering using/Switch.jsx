function Switch() {
  const orderStatus = "Pending";

  let message;

  switch (orderStatus) {
    case "Pending":
      message = <h2>Your order is pending.</h2>;
      break;

    case "Processing":
      message = <h2>Your order is being processed.</h2>;
      break;

    case "Shipped":
      message = <h2>Your order has been shipped.</h2>;
      break;

    case "Delivered":
      message = <h2>Your order has been delivered.</h2>;
      break;

    default:
      message = <h2>Invalid Order Status.</h2>;
  }

  return <div>{message}</div>;
}

export default Switch;