import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
// import Header from "./Header";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Senedo Ridge Vineyard
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    color: "white"
  },
  headbackground: {
    backgroundColor: "#212529"
  },
  header: {
    color: "white",
    fontStyle: 'italic',
    fontFamily: 'Belluccia',
    fontSize: "25px",
    
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    
  },

  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Gallery() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="default">
        <Toolbar className={classes.headbackground}>
          <CameraIcon className={classes.icon} />
          <Typography className={classes.header} variant="h6" color="default" noWrap>
            Senedo Ridge Vineyard
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Senedo Ridge Vineyard Gallery
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Having owned a part-time photography business in the 1990s, Jon still loves to snap pictures around the Vineyard.
                This gallery has a lot of his favorites, as well as some contributions from friends & family!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="default">
                    Back To Home
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="default">
                    Contact Us
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="100%">
          {/* End hero unit */}
          <Grid container spacing={6}>
            
              <Grid item  xs={12} sm={3} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/6EqeGER.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Misty Western View
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={3} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/clYDfsW.jpg"
                    title="Image title"
                   
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Buck Mountain Snow Day
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={3} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/KttNoOC.jpg"
                    title="Image title"
                   
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Buck Mountain Smokey
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={3} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/pNmdgcJ.jpg"
                    title="Image title"
                   
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Friend 1 — Black Bear
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={3} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/zbx4Eu8.jpg"
                    title="Image title"
                   
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Friend 2 — Fox
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={3} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/02dm8v7.jpg?1"
                    title="Image title"
                   
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Friend 3 — Hawk
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={3} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/rONa5Hu.jpg"
                    title="Image title"
                   
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Turkey Season
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={3} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/scJC7w3.jpg?1"
                    title="Image title"
                   
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Appalacian Mountain Sunset
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={3} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/8RXtSh0.jpg?1"
                    title="Image title"
                   
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Spring Bloom
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={3} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/nV39lSf.jpg"
                    title="Image title"
                   
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      The Storm
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={3} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/yEMLAQA.jpg"
                    title="Image title"
                   
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Tractor's First Snow Day
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item  xs={12} sm={3} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/fTjuTvG.jpg"
                    title="Image title"
                   
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      What Started It All
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Senedo Ridge Vineyard
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Estate Grown & Operated
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}