function PostData(){
    const addProduct =()=>{
        const product={
            title:"Laptop",
            price:"80000",
            item:"Electronis"
        };
        fetch("https://fakestoreapi.com/products",
            {
                method:"POST",
                headers:{
                    "Context-Type":"application/json",
                },
                body:JSON.stringify(product),
            })
            .then((response)=>response.json())
            .then((data)=>{console.log("Product Added:",data);
            })
    }
    return(
        <div>
            <h1>Create POST requests with sample data</h1>
            <button onClick={addProduct}>Add Product</button>
        </div>
    )
}
export default PostData;