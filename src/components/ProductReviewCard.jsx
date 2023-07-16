import React from "react";
import "../stylesheets/ProductReviewCard.css";

const ProductReviewCard = ({ image, price, name, review, index }) => {
  return (
    <div className="ProductReviewCard">
      <img src={image} alt={`${index} image`} />
      <h4>{review}</h4>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
};

export default ProductReviewCard;
