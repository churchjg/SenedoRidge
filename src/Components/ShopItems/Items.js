import React from 'react';


export default function WineItem() {
    
  
    return (
        <body>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Senedo Ridge Vineyard</a>
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
              <a class="nav-link" href="#"
                >Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Wine Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

   
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <h1 class="my-4">Senedo Ridge Vineyard — Wine Shop</h1>
          <div class="list-group">
          <a href="#" class="list-group-item">Red Wine</a>
          <a href="#" class="list-group-item">White/Other Wines</a>
          <a href="#" class="list-group-item">Gifts</a>
          </div>
        </div>
      

        <div class="col-lg-5">
          <div class="card mt-2">
            <img
              class="card-img-top img-fluid"
              src="https://i.imgur.com/vdVhnD0.png"
              alt=""
            />
            <div class="card-body">
              <h3 class="card-title">Cabernet Sauvignon</h3>
              <h4>$24.00</h4>
              <p class="card-text">
                A young wine with strong berry flavors, this wine is best served at room temperature, 15-20 minutes after opening.
              </p>
              
            </div>
          </div>
        

          <div class="card card-outline-secondary my-4">
            <div class="card-header">Submit Feedback</div>
            <div class="card-body">
              <p>
                Please submit feedback about your experience with our wine!
              </p>
              
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

  
  </body>
)
    }