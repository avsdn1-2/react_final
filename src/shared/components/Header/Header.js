import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { NavLink } from 'react-router-dom';
import StyledBadge from '@material-ui/core/Badge';
import  AddShoppingCartIcon  from '@material-ui/icons/AddShoppingCart';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

const useCustomStyles = makeStyles((theme) => ({
  header:{
    backgroundColor:'green',
  },
  avat:{
    backgroundColor:'limeGreen',
  }
}));

export function Header() {
  const classes = useStyles();

  const customClasses = useCustomStyles();

  return (
    <Fragment>
      <div className={classes.offset} />
      <AppBar className={customClasses.header} position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Avatar className={customClasses.avat}>MS</Avatar>
          <Typography variant="h6" className={classes.title}>

          </Typography>
          <Box>
            <Button color="inherit" to="/" exact component={NavLink}>Домашняя страница</Button>
            <Button color="inherit" to="/about" exact component={NavLink}>О нас</Button>
            <Button color="inherit" to="/delivery" exact component={NavLink}>Доставка и оплата</Button>
            <Button color="inherit" to="/catalog" exact component={NavLink}>Каталог</Button>
            <IconButton to="/cart" exact component={NavLink} aria-label="cart">
              <StyledBadge badgeContent={0} color="secondary">
                <AddShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {};
