import React from "react";
import { Route } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Gallery from "../Gallery/Gallery";
import WineShop from "../Shop/WineShop"
import WineItem from "../ShopItems/Items"
import Checkout from "../Checkout/Checkout"

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(2),
  },
}));

const sections = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "#" },
  { title: "Contact Us", url: "#" },
  { title: "Events", url: "/event" },
  { title: "Wine Shop", url: "/wine" },
  { title: "Gallery", url: "/gallery" },
];

const mainFeaturedPost = {
  title: "Senedo Ridge Vineyard",
  description:
    "Senedo Ridge Vineyard was founded in 2016 by Jonathan Church with a simple idea in mind:",
  description1: "To Leave Something Behind.",

  image: "https://i.imgur.com/hRMV0G1.jpg",
  imgText: "main image description",
  linkText: "Browse Wines",
};

const featuredPosts = [
  {
    title: "About Us",
    date: "",
    description:
      "Senedo Ridge is family owned and operated by the Church family. Our wine is estate grown and produced among the foothills of the Shenandoah Valley. The Vineyard operates on two acres of a sloping mountainside with high quality clay-based soil................................................................ ",
    image: "https://i.imgur.com/Rd7jJDR.jpg",
    imageText: "Image Text",
  },
];

const contactUs = [
  {
    title: "Contact Us",
    date: "",
    description:
      "If you would like to get in contact, either for feedback or to join our wine club, please fill out the form below. DONT FORGET TO ADD FORM ",
    image: "https://i.imgur.com/ELifj89.jpg",
    imageText: "Image Text",
  },
];



export default function Homepage() {
  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%">
        <Header title="Senedo Ridge Vineyard" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={4}>
            {contactUs.map((post) => (
              <ContactUs key={post.title} post={post} />
            ))}
          </Grid>
        </main>
        {/* <Gallery/> */}
        {/* <WineShop/> */}
        {/* <WineItem /> */}
        {/* <Checkout/> */}
      </Container>
      <Footer
        title="Senedo Ridge Vineyard"
        description="Estate Grown & Operated"
      />
    </React.Fragment>
  );
}
