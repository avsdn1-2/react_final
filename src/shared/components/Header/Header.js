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
import { useSelector } from "react-redux";
import * as CartDuck from "../../../features/cart/ducks/cart.duck";
import {useDispatch} from "react-redux";



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

  const numProducts = useSelector(CartDuck.selectNumProducts);

  const dispatch = useDispatch();
  const clearCart = (value) => dispatch(CartDuck.clearCart()); // сгенерируем функции для действий

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
            {(numProducts > 0) && <Button onClick={() => clearCart()} color="inherit" to="" exact component={NavLink}>Очистить корзину</Button>}
            <IconButton to="/cart" exact component={NavLink} aria-label="cart">
              <StyledBadge badgeContent={numProducts} color="secondary">
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
