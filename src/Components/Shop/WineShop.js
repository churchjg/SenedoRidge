import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom'

export default function WineShop() {
    
  
    return (
        <div>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="/">Senedo Ridge Vineyard</a>
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
                  <a class="nav-link" href="/"
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
                  <a class="nav-link" href="/event">Events</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/wine">Wine Shop</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/gallery">Gallery</a>
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
                <a href="/wine/category/red" class="list-group-item">Red Wine</a>
                <a href="/wine/category/rose" class="list-group-item">White/Other Wines</a>
                <a href="/gift" class="list-group-item">Gifts</a>
              </div>
            </div>
            
    
            <div class="col-lg-9">
              <div
                id="carouselExampleIndicators"
                class="carousel slide my-2"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img
                      class="d-block img-fluid"
                      src="https://i.imgur.com/DPVJ1FE.png?1"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block img-fluid"
                      src="https://i.imgur.com/KttNoOC.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block"
                      src="https://i.imgur.com/yiotp6n.jpg?2"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
    
             <div class="row">
    
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="https://i.imgur.com/rL7eA34.png" alt=""/></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="/item/">Vintners Reserve</a>
                    </h4>
                    <h5>$26.00</h5>
                    <p class="card-text">This specialty reserve is aged in small batches within French oak barrels. Still containing bold flavor, it's tannins have dissipated — imparting a smooth, rich flavor boasting of black fruit and vanilla.</p>
                  </div>
                  <div class="card-footer">
                    <button class="order">Add To Cart</button>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="https://i.imgur.com/PxpDi9P.png" alt=""/></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="/item/">Rosé</a>
                    </h4>
                    <h5>$18.00</h5>
                    <p class="card-text">Senedo's Rosé is the newest addition to our inventory! It boasts great summer flavors including red fruit, flowers, citrus, and melon, with a pleasant crunchy green flavor on the finish similar to celery or rhubarb. Fresh, fruity, with some extra brightness and crispness — this wine is fantastic for summer nights.</p>
                  </div>
                 <div class="card-footer">
                    <button class="order">Add To Cart</button>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="https://i.imgur.com/ohEajXT.png" alt=""/></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="/item/">Petít Verdot</a>
                    </h4>
                    <h5>$24.00</h5>
                    <p class="card-text">Petit Verdot offers up aromas of mostly black fruit flavors ranging from plum, blackberry and blueberry to slightly lighter black cherry. The unique and intriguing flavors of Petit Verdot are herbal and floral notes such as violet, lilac, lavender, sage, and dried herbs. This wine has a full body and high tannins.</p>
                  </div>
                  <div class="card-footer">
                    <button class="order">Add To Cart</button>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="https://i.imgur.com/OaQ29OX.png" alt=""/></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="/item/">Chambourcin</a>
                    </h4>
                    <h5>$20.00</h5>
                    <p class="card-text">Chambourcin is a hybrid grape variety that is popular due to its high crop yields, versatility, beautiful color, and aromatics. This particular wine, however, was made for drinking! It is a full flavored wine that showcases a wide range of berries while providing a dry style and drinking experience.</p>
                  </div>
                  <div class="card-footer">
                    <button class="order">Add To Cart</button>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="https://i.imgur.com/vdVhnD0.png" alt=""/></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="/item/">Cabernet Sauvignon</a>
                    </h4>
                    <h5>$22.00</h5>
                    <p class="card-text">A young wine with strong berry flavors, this wine is best served at room temperature, 15-20 minutes after opening.</p>
                  </div>
                  <div class="card-footer">
                    <a href="/item">
                    <button class="order">Add To Cart</button>
                  </a>
                  </div>
                </div>
              </div>
    
               <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#"><img class="card-img-top" src="https://i.imgur.com/nUI03mv.png" alt=""/></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="/gift">Gift Cards</a>
                    </h4>
                    <h5>Multiple Options</h5>
                    <p class="card-text">Senedo Ridge Gift Cards make a great present for any occasion!</p>
                  </div>
                  <div class="card-footer">
                  <a href="/gift">
                    <button class="order">See Gifts</button>
                    </a>
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
    </div>
    )

    
}