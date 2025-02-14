import React, { useState } from "react";
import "./Recommended.css";

const products = [
    {
      id: 1,
      name: "Galaxy S25 Ultra",
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/2501/gallery/in-galaxy-s25-s938-sm-s938bzbcins-thumb-544702652?$216_216_PNG$",
      price: "₹141999.00",
      colors: ["#A6C3DC", "#333", "#D9D0C7", "#B6B4B0"],
      storageOptions: ["56 GB", "512 GB", "1 TB"],
    },
    {
      id: 2,
      name: "Galaxy Buds3 Pro",
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/2407/gallery/in-galaxy-buds3-pro-r630-sm-r630nzaainu-thumb-542134811?$216_216_PNG$",
      price: "₹19999.00",
      colors: ["#C0C0C0", "#000000"],
      storageOptions: [],
    },
    {
      id: 3,
      name: "Galaxy M15 5G Prime (6 GB Memory)",
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m156bdbgins/gallery/in-galaxy-m-sm-m156bdbgins-front-dark-blue-thumb-541582145?$216_216_PNG$",
      price: "₹13499.00",
      colors: ["#001F5B"],
      storageOptions: ["128 GB"],
    },
    {
      id: 4,
      name: "Galaxy Tab A9+ 5G (8 GB Memory)",
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-x216bzaeins/gallery/in-galaxy-tab-a9-plus-sm-x216-sm-x216bzaeins-thumb-538733756?$216_216_PNG$",
      price: "₹22999.00",
      colors: ["#333", "#C0C0C0", "#D9D9D9"],
      storageOptions: ["128 GB"],
    },
  ];

function Recommend() {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedStorage, setSelectedStorage] = useState({});

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <button className="nav-button left" onClick={handlePrev}>‹</button>
      <div className="product-card">
        <img src={products[currentIndex].image} alt={products[currentIndex].name} className="product-image" />
        <h3>{products[currentIndex].name}</h3>
        <p className="price">{products[currentIndex].price}</p>
        
        <div className="color-options">
          {products[currentIndex].colors.map((color) => (
            <span
              key={color}
              className="color-circle"
              style={{ backgroundColor: color, border: selectedColors[currentIndex] === color ? "2px solid black" : "none" }}
              onClick={() => setSelectedColors({ ...selectedColors, [currentIndex]: color })}
            ></span>
          ))}
        </div>

        <div className="storage-options">
          {products[currentIndex].storageOptions.map((storage) => (
            <button
              key={storage}
              className={`storage-button ${selectedStorage[currentIndex] === storage ? "active" : ""}`}
              onClick={() => setSelectedStorage({ ...selectedStorage, [currentIndex]: storage })}
            >
              {storage}
            </button>
          ))}
        </div>

        <button className="buy-button">Buy now</button>
      </div>
      <button className="nav-button right" onClick={handleNext}>›</button>
    </div>
  );
}

export default Recommend;
