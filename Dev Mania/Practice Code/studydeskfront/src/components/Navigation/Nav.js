import './Nav.css';
import React from 'react';



const Nav = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn){
      return(
        <div class="wrap">
          <span class="decor"></span>
          <nav>
            <ul class="primary">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
                <ul class="sub">
                  <li><a href="#">Others' Story</a></li>
                  <li><a href="#">Share your Story</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Courses</a>
                <ul class="sub">
                  <li><a href="#">Course A</a></li>
                  <li><a href="#">Course B</a></li>
                  <li><a href="#">Others</a></li>
                </ul>  
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact</a>
                <ul class="sub">
                  <li><a href="#">Email</a></li>
                  <li><a href="#">Phone</a></li>
                </ul>  
              </li>
              <li class = "signout">
                <a href="#"
                  onClick = {() => onRouteChange('signout')}
                >
                Sign Out
                </a>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
    else
      return(
    		<div class="wrap">
          <span class="decor"></span>
          <nav>
            <ul class="primary">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
                <ul class="sub">
                  <li><a href="#">Others' Story</a></li>
                  <li><a href="#">Share your Story</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Courses</a>
                <ul class="sub">
                  <li><a href="#">Course A</a></li>
                  <li><a href="#">Course B</a></li>
                  <li><a href="#">Others</a></li>
                </ul>  
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
                <ul class="sub">
                  <li><a href="#">Email</a></li>
                  <li><a href="#">Phone</a></li>
                </ul>  
              </li>
              <li class = "sign">
                <a href="#">Sign In</a>
                <ul class="sub signn">
                  <li><a href="#"
                    onClick = {() => onRouteChange('register')}
                    >Register</a></li>
                  <li><a href="#"
                   onClick = {() => onRouteChange('login')}
                   >
                   Log In
                   </a></li>
                </ul>  
              </li>
            </ul>
          </nav>
        </div>
	     );
}

export default Nav;