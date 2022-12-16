import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './style.css';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
        <header>
          <a href="./" class="brand">RPB STORE</a>
          <div class="menu-btn"></div>
          <div class="navigation">
            <div class="navigation-items">
              <a href="/">Home</a>
              <a href="/product">Product</a>
              <a href="https://neartail.com/sm/u_eQl4fZI">Order</a>
              <a href="/profile">Profile</a>
            </div>
          </div>

        </header>
    </>
  );
}
