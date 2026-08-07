import { useContext } from "react";
import RestaurantContext from "./RestaurantContext";

function RestaurantList() {
  const { restaurant, setRestaurant } = useContext(RestaurantContext);
  return (
    <div>
      <h1>Create and configure Context API in a React application</h1>
      <h2>{restaurant}</h2>
      <button onClick={() => setRestaurant("KFC")}>
        Change Restaurant
      </button>
    </div>
  );
}
export default RestaurantList;