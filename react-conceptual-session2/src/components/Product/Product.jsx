import React from "react";
const Product = (props) => {
  const { product,handleItem} = props;
  
  return (
    <section style={{marginTop:product.case>10?'50px':'0'}}>
      <div className="card shadow-sm w-full bg-white p-5">
        <div className="flex justify-center">
          <img className="w-40" src={product.image} alt="Shoes" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>
            {product.description.slice(0,100)}
          </p>
          <div className="card-actions justify-between items-center">
            <h2>{product.price}</h2>
            <button onClick={() => handleItem(product)} className="btn btn-primary text-[#fff] font-bold bg-blue-600">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
