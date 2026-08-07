import { createContext, useState } from "react";
const CartContext = createContext();
function GlobalState({children}){
    const[cart, setCart] = useState([]);
    return(
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default GlobalState;