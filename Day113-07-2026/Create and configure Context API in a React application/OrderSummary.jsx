import { useContext } from "react";
import RestaurantContext from "./RestaurantContext";

function OrderSummary() {
  const { restaurant } = useContext(RestaurantContext);

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Selected Restaurant: {restaurant}</p>
    </div>
  );
}

export default OrderSummary;