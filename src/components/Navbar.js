import React from 'react';
import '../App.scss';
function Navbar() {
    return (
        <div className="Navbar-wrapper">
            <div>
                <a className="Navbar-tittle" href="#" >NHA LAM</a>
                <a className="Navbar-about" href="#">About Us</a>
                <a className="Navbar-product" href="#">Product</a>
            </div>
           
            <div className="Navbar-search-container">
                <form>
                    <input className="Navbar-searchbox" type="text" placeholder="Search..." name = "search"></input>
                    
                    <button type="submit"><i>Search</i></button>
                    
                </form>
            </div>


        </div>
              
           
    );
}
export default Navbar;