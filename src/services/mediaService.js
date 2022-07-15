export const fetchImageUrl = async (name) => {
  const res = await fetch(`/images/${name}`);
  const blob = await res.blob();
  const localUrl = URL.createObjectURL(blob);
  return localUrl;
};
