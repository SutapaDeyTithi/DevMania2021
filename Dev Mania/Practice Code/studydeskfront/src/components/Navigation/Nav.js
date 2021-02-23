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
                <a href="#">Stories</a>
                <ul class="sub">
                  <li><a href="#">Others' Story</a></li>
                  <li><a href="#">Share your Story</a></li>
                </ul>
              </li>
              <li>
                <a href="#">About us</a>
                <ul class="sub">
                  <li><a href="#">Inspiration</a></li>
                  <li><a href="#">Contributors</a></li>
                  <li><a href="#">Others</a></li>
                </ul>  
              </li>
              <li>
                <a href="#">Get Help</a>
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
                <a href="#">Stories</a>
                <ul class="sub">
                  <li><a href="#">Others' Story</a></li>
                  <li><a href="#">Share your Story</a></li>
                </ul>
              </li>
              <li>
                <a href="#">About us</a>
                <ul class="sub">
                  <li><a href="#">Inspiration</a></li>
                  <li><a href="#">Contributors</a></li>
                  <li><a href="#">Others</a></li>
                </ul>  
              </li>
              <li>
                <a href="#">Get Help</a>
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