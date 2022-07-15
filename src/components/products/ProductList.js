import React, { useState, useEffect } from "react";
import ProductTile from "./ProductTile";
import { createUseStyles } from "react-jss";
import { getProducts } from "../../services/productsService";
import { getSubArray, SUBARRAY_SIZE, TIMER } from "../../utils";
const useStyles = createUseStyles({
  container: {
    flexBasis: "260px",
    marginTop: "20px",
    transition: "all .4s linear",
  },
  heading: {
    textAlign: "center",
    fontWeight: 600,
    letterSpacing: "1.5px",
  },
  productList: {
    marginTop: "36px",
    "&::before": {
      content: "''",
      marginBottom: "32px",
      display: "block",
      height: "2px",
      width: "100%",
      backgroundColor: "#005e95",
    },
  },
});

const ProductList = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productsArr = await getProducts();
      setProducts(productsArr);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setSelectedProducts(getSubArray(products, SUBARRAY_SIZE));
      setInterval(() => {
        setSelectedProducts(getSubArray(products, SUBARRAY_SIZE));
      }, TIMER);
    }
  }, [products]);
  return (
    <aside className={classes.container}>
      <h3 className={classes.heading}>Precios</h3>
      <ul className={classes.productList}>
        {selectedProducts.map((product, index) => (
          <ProductTile key={index} {...product} />
        ))}
      </ul>
    </aside>
  );
};
export default ProductList;
