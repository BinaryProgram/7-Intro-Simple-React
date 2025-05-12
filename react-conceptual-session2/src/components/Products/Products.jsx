import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
const Products = (props) => {
  const [products, setProducts] = useState([]);
  const { handleItem } = props;
  useEffect(() => {
    const fetchCarts = async () => {
      const res = await fetch("./fakeData.json");
      const data = await res.json();
      setProducts(data);
    };
    fetchCarts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-medium">
        Total product - {products.length}
      </h1>
      <div className="mt-5">
        {products.map((product) => (
          <Product
            product={product}
            handleItem={handleItem}
            key={product.id}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
