import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "./Components/Homepage/Header"
import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Button from "@material-ui/core/Button";
import Homepage from "./Components/Homepage/Homepage";
// import Gallery from "./Components/Gallery/Gallery";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import WineShop from "./Components/Shop/WineShop";
import Gift from "./Components/Shop/Gifts";
import Gallery from "./Components/Gallery/Gallery";
import Checkout from "./Components/Checkout/Checkout";
import WineItem from "./Components/ShopItems/Items"
import Event from "./Components/Events/Events"
// import ContactUs from "./Components/Homepage/ContactUs";
import Contact from "./Components/Contact/Contact"
import About from "./Components/About/About"

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    
  
 
  fetch("https://senedo-backend.herokuapp.com/")
      .then(res => res.json())
      .then(data => console.log(JSON.parse(data)))
  
  }


  render() {
    return (
      <Switch>
        <Route path="/" render={() => <Homepage />} exact/>
        <Route path="/wine" render={() => <WineShop />} exact/>
        <Route path="/gift" render={() => <Gift />} exact/>
        <Route path="/event" render={() => <Event />} exact />
        <Route path="/checkout" render={() => <Checkout exact />} />
        <Route path="/item" render={() => <WineItem />} exact/>
        <Route path="/gallery" render={() => <Gallery />} exact/>
        <Route path="/contact" render={() => <Contact />} exact/>
        <Route path="/about" render={() => <About />} exact/>
      </Switch>
    );
  }
}

export default App;
