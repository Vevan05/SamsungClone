import React, { useState } from "react";
import "./DoWhatYouCant.css";

const DoWhatYouCant = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const listItems = [
    {
      title: "Empowering a Better You",
      imageUrl: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/empowering-a-better-you/static-global-empower-0001_home-explore-banner_pc_684x684.jpg?$684_684_JPG$",
      imageAlt: ""
    },
    {
      title: "Discover how our AI empowers you",
      imageUrl: "https://images.samsung.com/is/image/samsung/assets/in/co15_half-teasher-list-2_pc_684x684.jpg?$684_684_JPG$",
    },
    {
      title: "3 Hosting Tips to Alleviate Holiday Stress",
      imageUrl: "https://images.samsung.com/is/image/samsung/assets/in/p6_gro1/p6_initial_explore_detail/food-home/da0050-3-hosting-tips-to-alleviate-holiday-stress/da0050_home_explore-banner_pc_684x684.jpg?$684_684_JPG$",
    },
    {
      title: "Tips for Navigating Big Life Changes",
      imageUrl: "https://images.samsung.com/is/image/samsung/assets/in/home/test/co15/mx0147_home-explore-banner_pc_684x684_resize.jpg?$684_684_JPG$",
    },
    {
      title: "Galaxy empowered",
      imageUrl: "https://images.samsung.com/is/image/samsung/assets/in/home/250205/624-by-624.jpg?$684_684_JPG$",
    },
  ];

  return (
    <div className="do-what-you-cant">
      <h2 className="heading">Explore #DoWhatYouCant</h2>
      <div className="content">
        <div className="image-container">
          <img
            src={
              hoveredIndex !== null
                ? listItems[hoveredIndex].imageUrl
                : "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/empowering-a-better-you/static-global-empower-0001_home-explore-banner_pc_684x684.jpg?$684_684_JPG$"
            }
            alt="image"
          />
        </div>
        <div className="list-container">
          <ul>
            {listItems.map((item, index) => (
              <div
                key={index}
                className={hoveredIndex === index ? "hovered" : ""}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span>{String(index + 1).padStart(1, "0")} {item.title}</span>
                <a href="#" className="learn-more">
                  Learn more
                </a>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoWhatYouCant;
