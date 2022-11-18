import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140031449.jpg?k=54d5863c96e16e976237840ef7f076442c36c9a79f2d4b761547b35e66455e29&o="
          alt="featured"
        />
        <div className="featured-title">
          <h1>UK</h1>
          <h2>219 properties</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140031475.jpg?k=2e257439429f3427540eeb375bac3368ec95bb90490d237b3f5be298fbea33bd&o="
          alt="featured"
        />
        <div className="featured-title">
          <h1>Ukraine</h1>
          <h2>639 properties</h2>
        </div>
      </div>
      <div className="featured-item">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140031509.jpg?k=e7cc938b5b12196b6a6e9e4acbf112add47ba7238a43b78f64605bf59d461753&o="
          alt="featured"
        />
        <div className="featured-title">
          <h1>Austria</h1>
          <h2>361 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
