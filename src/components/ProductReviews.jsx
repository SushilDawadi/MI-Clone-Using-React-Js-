import React from "react";
import "../stylesheets/ProductReviews.css";
import ProductReviewCard from "./ProductReviewCard.jsx";

const ProductReviews = ({ productReviews }) => {
  return (
    <div className="productReviews">
      {productReviews.map((item, index) => (
        <ProductReviewCard
          key={item.image}
          image={item.image}
          price={item.price}
          name={item.name}
          review={item.review}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
