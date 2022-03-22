import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "images/one.jpg",
  },
  {
    url: "images/two.jpg",
  },
  {
    url: "images/three.jpg",
  },
];

const Home = () => {
  return (
    <div className="slide-container">
      <Slide>
        {/* using the map function to return the objects index value from slideImages */}
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              {/* <h3 className="slider-text">Digital Abstract Art</h3> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Home;
