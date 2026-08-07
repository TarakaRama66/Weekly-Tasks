import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Loading from "./Loading";

const ProductWithLoading = Loading(ProductList);

function LoadingApp() {
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
      setTimeout(()=>{
          setProducts([
              {
                  id:1,
                  title:"Laptop",
                  price:50000
              },
              {
                  id:2,
                  title:"Keyboard",
                  price:690
              },
              {
                  id:3,
                  title:"Mouse",
                  price:300
              }
          ]);
          setLoading(false);
      },3500);
  },[]);
  return (
      <ProductWithLoading
          products={products}
          loading={loading}/>
  );
}
export default LoadingApp;