import React, { useState } from "react";
import "./Highlights.css";

const categories = {
  "New In": [
    {
      title: "Galaxy S25 Ultra",
      subtitle: "Avail ₹10000* Upgrade bonus",
      image: "https://images.samsung.com/is/image/samsung/assets/in/home/250212/684x684_Big_Tile_Paradigm.jpg?$684_684_JPG$", 
      badge: "New",
    },
    {
      title: "Accessories",
      subtitle: "",
      image: "https://images.samsung.com/is/image/samsung/assets/in/home/250123/twh/Galaxy-Tab-S10-Series__Small_Tile_330x330.jpg?$330_330_JPG$",
      badge: "New",
    },
  ],
  Mobile: [
    {
      title: "Galaxy Z Fold6",
      subtitle: "Own now at ₹ 6750/mo.*",
      image: "https://images.samsung.com/is/image/samsung/assets/in/home/250123/twh/Fold6_Black_330X330.png?$330_330_PNG$",
    },
    {
      title: "Galaxy S24",
      subtitle: "₹ 54999* with ₹ 10000* instant bank discount",
      image: "https://images.samsung.com/is/image/samsung/assets/in/home/250211/Galaxy_S24_Small_Tile_330x330.jpg?$330_330_JPG$",
    },
    {
      title: "Galaxy A35 5G",
      subtitle: "Grab at just ₹ 24999*",
      image: "https://images.samsung.com/is/image/samsung/assets/in/home/250210/A35_330X330.jpg?$330_330_JPG$",
    },
  ],
  TV: [
    {
      title: "Samsung Neo QLED 8K",
      subtitle: "Save up to ₹ 15000*",
      image: "https://images.samsung.com/is/image/samsung/assets/in/home/250123/twh/330x330_DUE70_.jpg?$330_330_JPG$",
    },
    {
      title: "The Frame 2024",
      subtitle: "Art Mode | 4K QLED",
      image: "https://images.samsung.com/is/image/samsung/assets/in/home/250123/twh/330x330_LS03D.jpg?$330_330_JPG$",
    },
  ],
  Appliances: [
    {
      title: "Bespoke Refrigerator",
      subtitle: "Save ₹ 9500*",
      image: "https://images.samsung.com/is/image/samsung/assets/in/home/250123/twh/New-In_RT51DG682BB1TL_Small_Tile_330x330.jpg?$330_330_JPG$",
    },
    {
      title: "WindFree AC",
      subtitle: "₹ 5000 Bank Discount",
      image: "https://images.samsung.com/is/image/samsung/assets/in/home/250123/twh/Appliances_Small-Tile_330X330_AR60F19D15WNNA.jpg?$330_330_JPG$",
    },
  ],
  Ecosystem: [
    {
      title: "Galaxy Buds3 Pro",
      subtitle: "Immersive sound",
      image: "https://images.samsung.com/is/image/samsung/assets/in/home/250123/twh/330x330_Buds3-Pro.jpg?$330_330_JPG$",
    },
    {
      title: "Galaxy Watch 7",
      subtitle: "Advanced Health Tracking",
      image: "https://images.samsung.com/is/image/samsung/assets/in/home/250208/330x330_Galaxy_Watch7.jpg?$330_330_JPG$",
    },
  ],
  "Samsung Live": [
    {
      title: "Supersize (98) Crystal 4K UHD TV",
      subtitle: "Get Free* QLED TV & Addl. benefits up to ₹11,000",
      image: "https://images.samsung.com/is/image/samsung/assets/in/home/250214/684x684.jpg?$684_684_JPG$",
      button: "Watch replay",
    },
  ]
};

export default function Highlights() {
  const [activeTab, setActiveTab] = useState("New In");

  return (
    <div className="highlights">
      <h2>This Week’s Highlights</h2>
      <div className="tabs">
        {Object.keys(categories).map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="highlight-grid">
        {categories[activeTab].map((item, index) => (
          <div key={index} className="highlight-card">
            {item.badge && <span className="badge">{item.badge}</span>}
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
