import React, { useState, useEffect } from "react";

import "./CustomSlider.css";

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const image_text = ["Galaxy Z Fold", "Galaxy S8", "Neo QLED 8K", "Family Hub", "Galaxy Watch Ultra"]

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      <div
      className="slider__wrapper"
      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
    >
      {children.map((item, index) => {
        return (
          <div
            className={`slider__item ${index === activeIndex ? "active" : ""}`}
            key={index}
            >
            {item}
          </div>
        );
      })}
  </div>
<div className="container__slider__links">
      {children.map((item, index) => (
        <div 
          key={index} 
          className="button-wrapper"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index && (
            <p className="hover-text">{image_text[index]||"Image"}</p>
          )}
          <button
            className={
              activeIndex === index
                ? "container__slider__links-small container__slider__links-small-active"
                : "container__slider__links-small"
            }
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
            }}
          ></button>
        </div>
      ))}
    </div>

      <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {">"}
      </button>
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {"<"}
      </button>
    </div>
  );
}

export default CustomCarousel;
