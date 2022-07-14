import React from "react";
import imgSrc from "../assets/images/1.jpg";

const ImageRenderer = () => {
  return (
    <figure>
      <img src={imgSrc} alt="product" />
    </figure>
  );
};

export default ImageRenderer;
