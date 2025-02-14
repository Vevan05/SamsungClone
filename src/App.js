import './App.css';
import React, {useState} from 'react'
import logo from './components/images/logo.png'

import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

import CustomCarousel from './components/CustomSlider';
import Highlights from './components/Highlights';
import Recommend from './components/Recommended';
import DoWhatYouCant from './components/DoWhatYouCant';

import images from './components/images/images';


function App() {
  const [search, setSearch] = useState("");
   const [selectedTab, setSelectedTab] = useState("New In");

  const renderContent = () => {
    switch (selectedTab) {
      case "New In":
        return <div>📢 Check out the newest arrivals!</div>;
      case "Mobile":
        return <div>📱 Explore the latest mobile phones.</div>;
      case "TV":
        return <div>📺 Browse top-notch TVs.</div>;
      case "Appliances":
        return <div>🍽️ Smart appliances for your home.</div>;
      case "Ecosystem":
        return <div>🌍 Discover the connected ecosystem.</div>;
      case "Samsung Live":
        return <div>🎥 Watch Samsung Live deals.</div>;
      default:
        return <div>Welcome to our store!</div>;
    }
  };

  const footerData = [
    {
      title: "Product & Service",
      links: [
        "Smartphones", "Tablets", "Audio Sound", "Watches", "Smart Switch",
        "Mobile Accessories", "TVs", "Sound Devices", "Refrigerators",
        "Laundry", "Air Solutions", "Cooking Appliances", "Monitors", "Memory Storage"
      ],
    },
    {
      title: "Shop",
      links: [
        "FAQs", "Contact Us", "Welcome Voucher", "Samsung Referral Advantage",
        "Samsung Student Advantage", "Defence Purchase Program",
        "Corporate Employee Program", "Corporate Bulk Purchase",
        "Samsung Experience Store", "Store Locator", "Smart Club",
        "Terms of Use", "Order Grievance Redressal", "Explore"
      ],
    },
    {
      title: "Support",
      links: [
        "WhatsApp Us", "Sign Language", "Email Us", "Call Us", "Email the CEO",
        "Community", "Product Registration", "Track Repair",
        "Service Centre", "Share Your Opinion", "Chat with us"
      ],
    },
    {
      title: "Account & Community",
      links: [
        "My Page", "My Products", "Orders", "Wishlist", "Vouchers",
        "My Referrals", "Service", "Community"
      ],
    },
    {
      title: "Sustainability",
      links: [
        "Environment", "Security & Privacy", "Accessibility",
        "Diversity · Equity · Inclusion", "Corporate Citizenship",
        "Corporate Sustainability"
      ],
    },
    {
      title: "About Us",
      links: [
        "Company Info", "Business Area", "Brand Identity", "Careers",
        "Investor Relations", "Newsroom", "Ethics", "Samsung Design"
      ],
    }
  ];

  return (
    <div className="App">

      <div className='Header'>
        <img src={logo} alt="Samsung" className='Heading' />

        <nav className="nav-links">
          <a href="#">Shop</a>
          <a href="#">Mobile</a>
          <a href="#">TV & AV</a>
          <a href="#">Appliances</a>
          <a href="#">Computing & Displays</a>
          <a href="#">Accessories</a>
          <a href="#">SmartThings</a>
          <a href="#">AI</a>
        </nav>

        <div className="Icons">
          <CiSearch className="Icon" />
          <CiShoppingCart className="Icon" />
          <RxPerson className="Icon" />
          <RxHamburgerMenu className="Icon" />
        </div>
    
    </div>

    <div className='Slider'>
        <CustomCarousel>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
      </CustomCarousel>
    </div>

    <div className='Highlights'>
      <div>
        <h1 className="highlights_heading">This Week’s Highlights</h1>
        <Highlights onSelect={setSelectedTab} />
        <div>{renderContent()}</div>
      </div>
    <div className='Recommended'>
      <h1 className="highlights_heading">Recommend Products</h1>
      <Recommend/>
    </div>
    
    <div className='DoWhatYouWant'>
      <DoWhatYouCant/>
    </div>

    <div className="footer-container">    
      <h2 className="footer-title">Looking for something else?</h2>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search Keyword"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-button">🔍</button>
        </div>
        <div className="keyword-buttons">
          {[
            "Galaxy S23 Ultra",
            "Galaxy S23 | S23+",
            "QLED 8K",
            "UHD TVs",
            "Eco bubble",
            "Curd Maestro",
            "Smart Monitor",
          ].map((tag) => (
            <button key={tag} className="keyword-button">
              {tag}
            </button>
          ))}
        </div>
        <ul className="footer-notes">
          <li>Images shown here are for representational purposes only.</li>
          <li>Samsung account login may be required for certain AI features.</li>
          <li>5G Devices are 5G ready, dependent on network availability.</li>
          <li>Offers may be revised or withdrawn without prior notice.</li>
        </ul>
        
        <div className="footer-content">
        {footerData.map((section, index) => (
          <div className="footer-column" key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      </div>

      <div className="footer-bottom">
      <div className="footer-bottom-content">
        <p>Copyright © 1995-2025 SAMSUNG All Rights reserved.</p>
        <p>
          Please dispose of e-waste and plastic waste responsibly. <br />
          For more information or e-waste pick up, please call 1800 5 7267864 or{" "}
          <a href="#">click here</a> for more details.
        </p>
        <p>
          Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001 <br />
          Corporate Identification Number (CIN): U31900DL1995PTC071387
        </p>
      </div>

      <div className="footer-bottom-links">
        <span>India/English</span> | <a href="#">Privacy</a> | <a href="#">Legal</a> |{" "}
        <a href="#">CSR Policy</a> | <a href="#">Sitemap</a>
      </div>

      <div className="footer-bottom-social">
        <span>Stay in the Loop?</span>
        <a href="#"><img src="https://cdn.jsdelivr.net/gh/twitter/twemoji/assets/svg/1f5e8.svg" alt="Facebook" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" /></a>
      </div>
    </div>

        </div>
      </div>
  );
}


export default App;
