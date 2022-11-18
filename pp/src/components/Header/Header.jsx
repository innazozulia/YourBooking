import React from "react";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = ({ type }) => {
  const [destination, setDestination] = React.useState("");
  const [openDate, setOpenDate] = React.useState(false);
  const [date, setDate] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = React.useState(false);
  const [options, setOptions] = React.useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "header-container listMode" : "header-container "
        }>
        <div className="header-list">
          <div className="header-list__item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header-list__item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header-list__item">
            <FontAwesomeIcon icon={faCar} />
            <span>Rent car</span>
          </div>
          <div className="header-list__item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="header-title">
              From seaside villas to city homes, book the perfect stay for less
            </h1>
            <p className="header-desc">A lifetime of discounts? It's Genius.</p>
            <button className="header-btn">Sign in / Register</button>
            <div className="header-search">
              <div className="header-search__item">
                <FontAwesomeIcon
                  icon={faBed}
                  className="header-icon"
                />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header-search__input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="header-search__item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header-icon"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header-search__text">{`${format(
                  date[0].startDate,
                  "MM.dd.yyyy",
                )} to ${format(date[0].endDate, "MM.dd.yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="header-search__item">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="header-icon"
                />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="header-search__text">
                  {`${options.adult} adult ${options.children} children ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="option-item">
                      <span className="option-text">Adult</span>
                      <div className="option-counter">
                        <button
                          disabled={options.adult <= 1}
                          className="option-counter__btn"
                          onClick={() => handleOption("adult", "d")}>
                          -
                        </button>
                        <span className="option-counter__num">
                          {options.adult}
                        </span>
                        <button
                          className="option-counter__btn"
                          onClick={() => handleOption("adult", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-item">
                      <span className="option-text">Children</span>
                      <div className="option-counter">
                        <button
                          disabled={options.children <= 0}
                          className="option-counter__btn"
                          onClick={() => handleOption("children", "d")}>
                          -
                        </button>
                        <span className="option-counter__num">
                          {options.children}
                        </span>
                        <button
                          className="option-counter__btn"
                          onClick={() => handleOption("children", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-item">
                      <span className="option-text">Rooms</span>
                      <div className="option-counter">
                        <button
                          disabled={options.room <= 1}
                          className="option-counter__btn"
                          onClick={() => handleOption("room", "d")}>
                          -
                        </button>
                        <span className="option-counter__num">
                          {options.room}
                        </span>
                        <button
                          className="option-counter__btn"
                          onClick={() => handleOption("room", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header-search__item">
                <button
                  className="header-button"
                  onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
