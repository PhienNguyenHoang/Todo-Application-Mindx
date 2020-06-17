import React from 'react';
import Navbar from './Navbar'
function Header() {
  return (
    <div className="Header-wrapper">
      <Navbar />
      <div className="logo">
        <img src="https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png" alt="logo" height="350" width="350"></img>
      </div>
    </div>
   
   
  );
}

export default Header;
