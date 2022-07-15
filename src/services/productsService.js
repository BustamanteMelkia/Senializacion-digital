import { BASE_URL } from "../utils";

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}data/lista.json`);
  let { limpieza } = await res.json();
  const pages = limpieza.map(({ hoja }) => hoja);
  // Merge all products into a single array,
  let products = [].concat(...pages);
  // Remove empty products
  return products.filter(({ precio, producto }) => precio && producto);
};
