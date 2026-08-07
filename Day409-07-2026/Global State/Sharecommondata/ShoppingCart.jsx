import Header from "./Header";
import Cart from "./Cart";
function ShoppingCart(){
    const cartItems = ["Laptops", "Mouse", "Keyboards"];
    return(
        <div>
            <h1>Create examples where multiple components share common data</h1>
            <Header
            count={cartItems.length}/>
            <Cart
            items={cartItems}/>
        </div>
    )
}
export default ShoppingCart;