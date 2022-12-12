import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './style.css';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
        <header>
          <div class="homepage">
            <h1>RPB STORE<br></br></h1>
            <div class="menu-btn"></div>
            <div class="navigation">
                <div class="navigation-items">
                    <a href="/">Home</a>
                    <a href="/product">Product</a>
                    <a href="/order">Order</a>
                    <a href="/profile">Profile</a>
                    <a href="/login">Login</a>
                <div id="buttonregister"class="button">
                <button type="button">SIGN IN</button>
                    </div>
                </div>
            </div>
          </div>
          </header>
    </>
  );
}
