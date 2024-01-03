import React from "react";
import './Home.css';
import { RiAccountPinBoxLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoSearch } from "react-icons/io5";
import { FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FiFacebook, FiTwitter} from 'react-icons/fi';
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


function Home() {

  return (
    <>
     <header className="fix">
      <nav>
        
        <div className="left">
          <ul className="logo-list">
            <li>
              <img
                src="https://www.wallpaperflare.com/static/39/121/109/interior-design-style-home-wallpaper.jpg"
                style={{
                  maxWidth: '100%',
                  maxHeight: '50px',
                  display: 'block',
                  textDecoration: 'none'
                }}
                alt="Logo"
              />
            </li>
          </ul>
        </div>
        <div className="center">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <IoSearch style={{ fontSize: '20px', cursor: 'pointer' }} />
          </div>
        </div>
        <div className="right">
          <ul>
          <li
              style={{
                color: "black",
              }}
            >
              <IoHome style={{ fontSize: '25px', cursor: 'pointer' }}
              title="Home"/>
            </li>
          <li style={{
                color: "black",
              }} >
              <FaShoppingCart 
              style={{ fontSize: '25px', cursor: 'pointer' }}
              title="Cart"/>
            </li>
          <li style={{
                color: "black",
              }} >
              <FcAbout 
              style={{ fontSize: '25px', cursor: 'pointer' }}
              title="About us"/>
            </li>
          <li style={{
                color: "black",
              }}>
              <RiAccountPinBoxLine
                style={{ fontSize: '25px', cursor: 'pointer' }}
                title="Account"
              />
            </li>
          </ul>
        </div>
      </nav>
      </header>
      <div className="space-below-content1"></div>
      <div className="main-content">
        <div className="grid-container">
          <div className="category-column">
            <ul>
              <h2>Categories</h2>
              <br></br>
              <li className="category-item">
                <img src="https://i.pinimg.com/736x/44/9a/89/449a897a1e5784d745b28b30170a83af--find-address-home-appliance-store.jpg" alt="appliances"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                HOME APPLIANCES</li>
              <li className="category-item">
              <img src="https://p7.hiclipart.com/preview/210/227/825/home-appliance-air-conditioner-refrigerator-tcl-corporation-tcl-home-appliances.jpg" alt="air condtioner"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                Air condtioner</li>
              <li className="category-item">
              <img src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Mobiles"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                Mobiles</li>
              <li className="category-item">
              <img src="https://microless.com/cdn/products/87b09cb143d5068bd332315385cbe527-hi.jpg" alt="laptop"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                Laptop</li>
              <li className="category-item">
              <img src="https://www.electrical-deals.co.uk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/2/4/24W2963DB-1.jpg" alt="TV"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                TV</li>
              <li className="category-item">
              <img src="https://spencers.in/media/catalog/category/18122023_icon_personalCare.png" alt="lists"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>

              <img src="https://dailyasianage.com/library/1605552217_1.png" alt="combo offer"
                 style={{maxHeight:'30px',
                maxWidth:'30px'}}
                 ></img>
                combo offers</li>
            </ul>
          </div>
          <div className="image-column">
            <div className="offer-image">
              <img src="https://i.pinimg.com/736x/44/9a/89/449a897a1e5784d745b28b30170a83af--find-address-home-appliance-store.jpg" alt="offer"style={{maxHeight:'400px'}} className="category-item"></img>
            </div>
          </div>
          <div className="image-column">
            <div className="offer-image">
               
            </div>
          </div>
          </div>
      </div>
      <div className="space-below-content"></div>

      <div className="last-image-container">
        <img src="https://www.lg.com/ca_en/images/CA/features/desktop-appliance_herobanner.jpg" alt="LastImage" className="category-item" />
      </div>

<div className="community-container">
  <center>
    <h2>Part of Sponcer Community</h2>
  </center>
  <div className="four-images-container">
    <img src="https://esquireelectronicsltd.com/wp-content/uploads/2017/01/sharp-32-inch-led-tv-lc-32le275x-Price-in-BD-1000x1000.jpg" className="category-item1" alt="Image1" />
    <img src="https://pngimg.com/uploads/air_conditioner/air_conditioner_PNG24.png" className="category-item1" alt="Image2" />
    <img src="https://tse4.mm.bing.net/th?id=OIP.-w-FLkbEyFTfQxhhl8Rj3QHaHE&pid=Api&P=0&h=180" className="category-item1" alt="Image3" />
    <img src="https://assets2.rockpapershotgun.com/asus-rog-strix-g513qm.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/asus-rog-strix-g513qm.jpg" className="category-item1" alt="Image4" />
  </div>
</div>
<div className="space-below-content2"></div>
<footer className="footer-distributed">
      
      <div className="footer-center">
        <div>
          <FaMapMarker className="icon" />
          <p>
            <span>63, </span> Ukkadam, Coimbatore
          </p>
        </div>
        <div>
          <FaPhone className="icon" />
          <p>+91.6345789021</p>
        </div>
        <div>
          <FaEnvelope className="icon" />
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-icons">
        <a href="https://www.facebook.com/AmazonIN/"  className="a" style={{color:'white'}}><FiFacebook className="icon" /></a>
        <a href="https://twitter.com/amazon" className="a" style={{color:'white'}}>  <FiTwitter className="icon" /></a>
        <a href="https://www.instagram.com/amazon/" className="a" style={{color:'white'}}><FaInstagramSquare className="icon"/></a>
        </div>
        <div className="footer-legal">
   <Link to='/Privacy'><p className="footer-privacy-policy">
        Privacy Policy
      </p></Link>
      <p className="footer-copyright">
        © 2023 Grocery Mania. All Rights Reserved.
      </p>
    </div>

      </div>
    </footer>
    </>
  );
}

export default Home;
