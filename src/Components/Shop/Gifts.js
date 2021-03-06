import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";

export default function Gifts() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            Senedo Ridge Vineyard
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/event">
                  Events
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/wine">
                  Wine Shop
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/gallery">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <h1 class="my-4">Senedo Ridge Vineyard — Gift Cards</h1>
            
          </div>

          

            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="https://i.imgur.com/hzxOS7l.png"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Gift Card</a>
                    </h4>
                    <h5>$25.00</h5>
                    <p class="card-text">
                    Senedo Ridge Gift Cards make a great present for any
                      occasion!
                    </p>
                  </div>
                  <div class="card-footer">
                  <a href="/checkout">
                    <button class="order">Add To Cart</button>
                  </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="https://i.imgur.com/hzxOS7l.png"
                      alt=""
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">Gift Card</a>
                    </h4>
                    <h5>$50</h5>
                    <p class="card-text">
                    Senedo Ridge Gift Cards make a great present for any
                      occasion!
                    </p>
                  </div>
                  <div class="card-footer">
                    <button class="order">Add To Cart</button>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="https://i.imgur.com/hzxOS7l.png"
                      alt=""
                    />
                  </a>
                  
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="/gift">Gift Card</a>
                    </h4>
                    <h5>$100.00</h5>
                    <p class="card-text">
                      Senedo Ridge Gift Cards make a great present for any
                      occasion!
                    </p>
                  </div>
                  <div class="card-footer">
                    <button class="order">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="py-5 bg-dark">
          <div class="container">
            <p class="m-0 text-center text-white">
              Copyright &copy; Senedo Ridge Vineyard 2020
            </p>
          </div>
        </footer>
      </div>
    
  );
}
