export const TIMER = 5000;
export const SUBARRAY_SIZE = 5;
export const IMAGES = ["0.png", "1.jpg", "2.jpg", "3.jpg"];

/**
 * Return a random number between {min} and {max}
 * @param {number} min Min included number
 * @param {number} max Max excluded number
 */
export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Get a subarray of random items from array
 * @param {*} array
 * @param {*} subArrayLength
 */
export const getSubArray = (array, subArrayLength) => {
  const subArray = [];
  const copy = [...array];
  for (let i = 0; i < subArrayLength; i++) {
    const index = getRandomNumber(0, copy.length);
    const [product] = copy.splice(index, 1);
    subArray.push(product);
  }
  return subArray;
};
