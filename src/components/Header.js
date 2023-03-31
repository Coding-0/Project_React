import React from 'react';
import '../components/Header.css';


const Header = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
    <div className='container fw-bold fs-5'>
        <a className="head ">
        <span><i class="ri-flashlight-line"></i></span>
         Home Appliances  </a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto   mx-2  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
        
  
        <li className="nav-item">
          <a className="nav-link disabled"> About </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled"> Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"> Service </a>
        </li>
      </ul>

      <button className='btn '>
        <a  className='btn btn-outline-dark ms-3'>
           <i class="ri-login-circle-line"></i>
           Login
        </a>
        <a className='btn btn-outline-dark ms-3'>
           <i class="ri-shopping-cart-fill"></i> cart
        </a>
      </button>
      
    </div>
     </div>
</nav>
     
  
  )
}

export default Header