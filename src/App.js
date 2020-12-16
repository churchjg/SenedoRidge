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

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    console.log("!!!!!!!!!!")
  
 
  fetch("http://127.0.0.1:8000/wine")
      .then(res => res.json())
      .then(data => console.log(JSON.parse(data)))
  
  }


  render() {
    return (
      <Switch>
        <Route path="/" render={() => <Homepage />} exact/>
        <Route path="/wine" render={() => <WineShop />} />
        <Route path="/gift" render={() => <Gift />} />
        <Route path="/event" render={() => <Event />} />
        <Route path="/checkout" render={() => <Checkout />} />
        <Route path="/item" render={() => <WineItem />} />
        <Route path="/gallery" render={() => <Gallery />} />
      </Switch>
    );
  }
}

export default App;
