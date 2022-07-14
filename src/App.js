import React from "react";

import ImageRenderer from "./components/ImageRenderer";
import ProductList from "./components/products/ProductList";


const App = () => {
  return (
    <main>
      <ImageRenderer />
      <ProductList />
    </main>
  );
}

export default App;
