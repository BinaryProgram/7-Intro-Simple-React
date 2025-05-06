import React from 'react';

// props drilling is default in react
// const MyProduct = (props) => {
//     const {product}= props;
//     return (
//       <div
//         style={{
//           border: "2px solid purple",
//           borderRadius: "20px",
//           padding: "20px",
//           margin:'10px'
//         }}
//       >
//         <h4>Product Title: {product.title}</h4>
//         <h5>Product Price: {product.price}</h5>
//       </div>
//     );
// };

// Or

const MyProduct = ({product}) => {
    const {title,price}= product;
    return (
      <div
        style={{
          border: "2px solid purple",
          borderRadius: "20px",
          padding: "20px",
          margin:'10px'
        }}
      >
        <h4>Product Title: {title}</h4>
        <h5>Product Price: {price}</h5>
      </div>
    );
};

export default MyProduct;

//react emmet snippet command - rsc