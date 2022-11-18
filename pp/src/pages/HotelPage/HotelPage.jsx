import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import EmailList from "../../components/EmailList/EmailList";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "./hotelPage.css";

const HotelPage = () => {
  const [slideNumber, setSlideNumber] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/352298299.jpg?k=2cafcddfa58cb62502e423b1f879024077a944965895157160bae007aea7618f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/352298364.jpg?k=932122b63a5cd4a5d2922ca0d5b42a3a6df0b07d2ffebef09e45314a430231b4&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/352298370.jpg?k=d9fa0b490309d635696539fe92923d6bfcda9b982ffad6053e92e3d97bdaf3b8&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/352298372.jpg?k=0b8a205903a6498badef5757ee49404e9b15820d580bd4c4e1bcd6d23de397c5&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/352298374.jpg?k=4549ff9360eb88893d10766f929ce3c324b2c15d00cde5ac4b7cd55051b7c0e7&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/352298376.jpg?k=81e796fc8a5f299f70df03788b0202d729f37065999f22035540ceec4e1c1ecf&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/352298378.jpg?k=fbf7acc927f13fdbe32e2501d48124a49de9e998ebdbe5edb985d491060a3757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/352298396.jpg?k=a1003730d233ceef16df0f5bb9a6e6ff2a397fdd99892f99a9718513b9618bab&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/352298390.jpg?k=9e43108307d9151bd98186f4d8dcb1b84956ea5684a0f0abbcce8cc12cbace44&o=&hp=1",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotel-container">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="slider-wrapper">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="slider-img"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotel-wrapper">
          <button className="book-now">Reserve or Book Now!</button>
          <h1 className="hotel-title">Tower Street Apartments</h1>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotel-distance">
            Excellent location – 500m from center
          </span>
          <span className="hotel-price-highlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotel-images">
            {photos.map((photo, i) => (
              <div
                className="hotel-img-wrapper"
                key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotel-img"
                />
              </div>
            ))}
          </div>
          <div className="hotel-details">
            <div className="hotel-details-texts">
              <h1 className="hotel-title">Stay in the heart of City</h1>
              <p className="hotel-desc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotel-details-price">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <EmailList />
        <Footer />
      </div>
    </>
  );
};

export default HotelPage;
