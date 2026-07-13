import { createContext, useState } from "react";

const RestaurantContext = createContext();

export function RestaurantProvider({ children }) {
  const [restaurant, setRestaurant] = useState("Paradise Biryani");

  return (
    <RestaurantContext.Provider
      value={{ restaurant, setRestaurant }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export default RestaurantContext;