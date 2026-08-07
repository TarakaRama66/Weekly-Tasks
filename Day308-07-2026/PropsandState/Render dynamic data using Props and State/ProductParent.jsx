import ProductChild from "./ProductChild";
function ProductParent(){
    return(
        <>
        <ProductChild
        name="Keyboard"
        price={999}/>
        </>
    )
}
export default ProductParent;