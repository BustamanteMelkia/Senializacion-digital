import React from "react";
import { createUseStyles } from "react-jss";

import ImageRenderer from "./components/ImageRenderer";
import ProductList from "./components/products/ProductList";

const useStyles = createUseStyles({
  container: {
    maxWidth: "1080px",
    width: "90%",
    margin: "0 auto",
  },
  main: {
    padding: "5vh 0px",
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    "@media (max-width: 568px)": {
      flexDirection: "column",
    },
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <ImageRenderer />
        <ProductList />
      </main>
    </div>
  );
};

export default App;
