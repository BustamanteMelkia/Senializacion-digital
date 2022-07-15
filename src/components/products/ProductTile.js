import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  productContainer: {
    margin: "18px 0px",
    listStyle: "none",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  title: {
    fontSize: "15px",
    letterSpacing: ".8px",
  },
});
const ProductTile = ({ producto: title, precio: price }) => {
  const classes = useStyles();
  return (
    <li className={classes.productContainer}>
      <span className={classes.title}>{title}</span>
      <span className={classes.price}>$ {price}</span>
    </li>
  );
};

export default ProductTile;
