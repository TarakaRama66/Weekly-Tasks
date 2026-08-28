const products=[
    {
        id:1,name:"Laptop",category:"Electronics",price:65000,seller:{name:"Bigc"}
    },
    {
        id:2,name:"Phone",category:"Electronics",price:30000
    },
    {
        id:3,name:"HeadPhones",category:"Electronics",price:1500,seller:{name:"Bigc"}
    },
    {
        id:4,name:"Shoes",category:"Fashion",price:1000
    },
    {
       id:5,name:"Watch",category:"Fashion",price:1200 
    }
];
// remove duplicates
const categories =[...new
    Set(products.map(({category})=>category))
];
console.log(categories);

// create product lookup
const productMap=new Map(
    products.map(product=>[product.id,product.name])
);
console.log(productMap);

// Display Products
products.forEach(({name,price,seller})=>{
    const sellerName=seller?.name??"No Seller Available";
    console.log(`${name} costs ${price} sold by ${sellerName}`);
});

// Add gst using Rest Parameter
function addGST(gst,...prices){
    return prices.map(price=>price+(price*gst)/100);
}
console.log(addGST(18,65000,30000,1500,1000,1200));