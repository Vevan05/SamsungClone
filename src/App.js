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
import footerData from './components/images/FooterData';


function App() {
  const [search, setSearch] = useState("");
   const [selectedTab, setSelectedTab] = useState("New In");
  
  return (
    <div className="App">

      <div className='Header'>
        <img src={logo} alt="Samsung" className='Heading' />

      <div className='links'>
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
        <h1 className="highlights_heading"></h1>
        <Highlights onSelect={setSelectedTab} />
    </div>

    <div className='Recommended'>
      <h1 className="highlights_heading">Recommend Products</h1>
      <Recommend/>
    </div>
    
    <div className='DoWhatYouCant'>
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
          <li>
            Images shown here are for representational purpose only, actual may vary. All features, specifications and prices are subject to change without prior notice. Model availability may vary from location to location.
          </li>
          <li>
            Image simulated. Samsung account login may be required for certain AI features.
          </li>
          <li>
            Image simulated. Available colours of Galaxy Buds3 Pro may vary by country or carrier. Galaxy Buds3 Pro supports  Galaxy AI features such as interpreter and Live Translate when paired with compatible Samsung Galaxy devices. Availability of Galaxy AI features may vary by device model. See samsung.com for details.
          </li>
          <li>
            5G Devices are 5G ready, connectivity dependent on network availability.
          </li>
          <li>
          S Pen Fold Edition sold separately and is only compatible with Z Fold5, Z Fold4 and Z Fold3. Flex mode supported at angles between 75˚ and 115˚.
          </li>
          <li>
          Watch screen image simulated for illustrative purpose. Availability of colours, sizes, models, and watch bands may vary by country or carrier.
          </li>
          <li>
            T&C Apply. Cashback at the sole discretion of the issuer / NBFC
          </li>
          <li>
            Offers may be revised or withdrawn without prior notice.
          </li>
          <li>
            Select offers are also available separately.
          </li>
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
        <p>Stay in the Loop?</p>
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
