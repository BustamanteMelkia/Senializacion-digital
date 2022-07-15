import React, { useEffect, useState, useRef } from "react";
import { createUseStyles } from "react-jss";
import { fetchImageUrl } from "../services/mediaService";
import { getRandomNumber, TIMER, IMAGES } from "../utils";

const useStyles = createUseStyles({
  imgContainer: {
    borderRadius: "10px",
    flex: 1,
    height: "90vh",
    backgroundRepeat: "no-repeat",
    transition: "background .3s linear",
    backgroundPosition: "center",
    backgroundSize: "cover",
    "@media (max-width: 568px)": {
      flex: "unset",
      height: "400px",
    },
  },
});

const ImageRenderer = () => {
  const classes = useStyles();
  const img = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchData = async () => {
    const url = await fetchImageUrl(IMAGES[currentIndex]);
    img.current.style.backgroundImage = `url(${url})`;
  };

  const getIndex = () => {
    let index = null;
    // Avoid render previous image
    do {
      index = getRandomNumber(0, IMAGES.length);
    } while (index === currentIndex);
    setCurrentIndex(index);
  };
  useEffect(() => {
    if (typeof currentIndex === "number") {
      setTimeout(() => getIndex(), TIMER);
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return <figure ref={img} className={classes.imgContainer}></figure>;
};

export default ImageRenderer;
