import { useEffect, useState } from "react";
import List from "./List";
import Loading from "./Loading";

const ProductWithLoading = Loading(List);

function MainApp() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
}, []);

  return (
    <div>
      <ProductWithLoading
        loading={loading}
        products={products}
      />
    </div>
  );
}

export default MainApp;