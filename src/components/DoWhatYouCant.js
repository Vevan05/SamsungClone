import React, { useState } from "react";
import "./DoWhatYouCant.css";

const DoWhatYouCant = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const listItems = [
    "Empowering a Better You",
    "Discover how our AI empowers you",
    "3 Hosting Tips to Alleviate Holiday Stress",
    "Tips for Navigating Big Life Changes",
    "Galaxy empowered",
  ];

  return (
    <div className="do-what-you-cant">
      <h2 className="heading">
        Explore <span>#DoWhatYouCant</span>
      </h2>
      <div className="content">
        <div className="image-container">
          <img src={"https://images.samsung.com/is/image/samsung/assets/in/explore/brand/empowering-a-better-you/static-global-empower-0001_home-explore-banner_pc_684x684.jpg?$684_684_JPG$"} alt="Empowered Woman" />
        </div>
        <div 
          className="list-container"
          onMouseEnter={() => setHoveredIndex(-1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <ul>
            {listItems.map((item, index) => (
              <li
                key={index}
                className={hoveredIndex === index ? "hovered" : ""}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span> {item}
                <a href="#" className="learn-more">Learn more</a>
              </li>
            ))}
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoWhatYouCant;
