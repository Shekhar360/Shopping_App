import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
   <>
   <nav>
    {/* <li>Home</li>
    <li>Products</li>
    <li>Category</li>
    <li>Contact</li>
    <li>LogOut</li>
    <li><img src="https://www.reshot.com/preview-assets/icons/7RTYEL8BZ9/shopping-cart-7RTYEL8BZ9.svg"></img></li>
    <li>My Profile</li> */}

    <div className="divs">Home</div>
    <div className="divs">Products</div>
    <div className="divs">Category</div>
    <div className="divs">Contact</div>
    <div className="divs">LogOut</div>
    <div className="divs"><img src="https://www.reshot.com/preview-assets/icons/7RTYEL8BZ9/shopping-cart-7RTYEL8BZ9.svg"></img></div>
    <div className="divs">My Profile</div>
   </nav>
   </>
  )
}

export default Navbar