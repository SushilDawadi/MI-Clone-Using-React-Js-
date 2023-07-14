import React from "react";
import "../stylesheets/StarProduct.css";

const StartProduct = ({ starProduct }) => {
  return (
    <div className="starProduct">
      <div>
        {/* starProduct[0].image --> 0 index image is selected */}
        <a href={starProduct[0].url}>
          <img src={starProduct[0].image} alt="1st Product" />
        </a>
      </div>
      <div>
        <a href={starProduct[1].url}>
          <img src={starProduct[1].image} alt="2nd product" />
        </a>
        <a href={starProduct[2].url}>
          <img src={starProduct[2].image} alt="2nd product" />
        </a>
        <a href={starProduct[3].url}>
          <img src={starProduct[3].image} alt="2nd product" />
        </a>
      </div>
    </div>
  );
};

export default StartProduct;
