import React, { Component } from 'react';
// import ReactDOM from "react-dom";
// import Button from "@material-ui/core/Button";
import Homepage from "./Components/Homepage/Homepage";
// import Gallery from "./Components/Gallery/Gallery";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    this.fetchWine()
    console.log("!!!!!!!!!!")
  }
  fetchWine = () => {
  fetch("https://senedo-backend.herokuapp.com/wine")
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return (
    <Homepage />
    )
  }
}

export default App;