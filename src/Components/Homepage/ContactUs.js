import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText, TextField
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 500,
    height: 500,
  },
});

export default function ContactUs(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item md={12} md={12}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {post.date}
            </Typography>
            <Typography variant="h6" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary"></Typography>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-secondary"
                label="Standard secondary"
                color="secondary"

              />
            </form>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image={post.image}
            title={post.imageTitle}
          />
        </Hidden>
      </Card>
    </Grid>
  );
}

ContactUs.propTypes = {
  post: PropTypes.object,
};
