import React from "react";
import "./featuredProperty.css";

const FeaturedProperty = () => {
  return (
    <div className="featured-property">
      <div className="featured-property-item">
        <img
          className="featured-property-img"
          src="https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1"
          alt=""
        />
        <span className="featured-property-name">La Roulotte de Ciney</span>
        <span className="featured-property-city">Belgium</span>
        <span className="featured-property-price">Starting from 123$</span>
        <div className="featured-property-raiting">
          <button>8.9</button>
          <span>Exellent</span>
        </div>
      </div>
      <div className="featured-property-item">
        <img
          className="featured-property-img"
          src="https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1"
          alt=""
        />
        <span className="featured-property-name">Dreischwesternherz</span>
        <span className="featured-property-city">Germany</span>
        <span className="featured-property-price">Starting from 152$</span>
        <div className="featured-property-raiting">
          <button>8.9</button>
          <span>Exellent</span>
        </div>
      </div>
      <div className="featured-property-item">
        <img
          className="featured-property-img"
          src="https://cf.bstatic.com/xdata/images/hotel/square600/178421525.webp?k=262301cdcbef1d33942bb02607906eafdee8dde3106ac5732966a206baeebb04&o=&s=1"
          alt=""
        />
        <span className="featured-property-name">
          Das rote Haus hinterm Deich
        </span>
        <span className="featured-property-city">Germany</span>
        <span className="featured-property-price">Starting from 117$</span>
        <div className="featured-property-raiting">
          <button>8.9</button>
          <span>Exellent</span>
        </div>
      </div>
      <div className="featured-property-item">
        <img
          className="featured-property-img"
          src="https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1"
          alt=""
        />
        <span className="featured-property-name">Ranczo w Dolinie</span>
        <span className="featured-property-city">Poland</span>
        <span className="featured-property-price">Starting from 99$</span>
        <div className="featured-property-raiting">
          <button>8.9</button>
          <span>Exellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
