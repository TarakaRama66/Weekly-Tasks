import { RestaurantProvider } from "./RestaurantContext";
import RestaurantList from "./RestaurantList";
import OrderSummary from "./OrderSummary";

function WrapApp() {
  return (
    <RestaurantProvider>
      <RestaurantList />
      <OrderSummary />
    </RestaurantProvider>
  );
}

export default WrapApp;