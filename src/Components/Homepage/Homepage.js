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
import Link from "@material-ui/core/Link";
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(2),
  },
}));

// const scrollTo = () => {
//   scroller.scrollTo('scroll-to-element', {
//     duration: 800,
//     delay: 0,
//     smooth: 'easeInOutQuart'
//   })
// }

const sections = [
  { title: "Home", url: "/" },
  { title1: "About Us", name:"scroll-to-element" , className:"element" },
  { title: "Contact Us", url: "/contact"},
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
    name: "scroll-to-element",
    className: "element",
    date: "",
    description:
      "If you would like to get in contact, either for feedback or to join our wine club, please click the button below and fill out the form.",
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
              <FeaturedPost name="featuredPosts" className="element" key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={4}>
            {contactUs.map((post) => (
              <ContactUs key={post.title} post={post} name="scroll-to-element" className="element"/>
              
            ))}
          </Grid>
        </main>
        
      </Container>
      
      <Footer
        title="Senedo Ridge Vineyard"
        description="Estate Grown & Operated"
      />
    </React.Fragment>
  );
}
