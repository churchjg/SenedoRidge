import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// import { render } from 'react-dom';
// import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `2px solid ${theme.palette.divider}`,
    marginTop: "-25px"
  },
  toolbarTitle: {
    flex: 1,
    fontStyle: 'italic',
    fontFamily: 'Belluccia'
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(2),
    flexShrink: 0,
    
  },
}));


// const scrollTo=() => {
//   scroller.scrollTo('scroll-to-element', {
//     duration: 800,
//     delay: 0,
//     smooth: 'easeInOutQuart'
//   })
// }
export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button variant="outlined" size="small">Join Our Wine Club</Button>
        <Typography
          component="h1"
          variant="h2"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign In
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      
        {sections.map((section) => (
          
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body1"
            href={section.url}
            className={classes.toolbarLink}
            
            
            >
            {section.title}
          </Link>
          
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};