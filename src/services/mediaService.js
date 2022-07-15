import { BASE_URL } from "../utils";

export const fetchImageUrl = async (name) => {
  const res = await fetch(`${BASE_URL}images/${name}`);
  const blob = await res.blob();
  const localUrl = URL.createObjectURL(blob);
  return localUrl;
};
