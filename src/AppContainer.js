import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Header } from "./shared/components/Header";
import { routes } from "./routes";
import { Page404 } from "./shared/components/Page404";
import { HomePage } from "./features/info/pages/HomePage";
import * as CatalogDuck from  "./features/catalog/ducks/catalog.duck";
import * as CartDuck from "./features/cart/ducks/cart.duck";
import {useDispatch, useSelector} from "react-redux";



export function AppContainer(props) {
  const { history } = props;
  const dispatch = useDispatch();

    useEffect(() => {
       dispatch(CatalogDuck.load()); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    }, [])

  return (
    <ConnectedRouter history={history}>
        <Header/>
      <Container>
          {/*
          <Route path="/" component={HomePage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/new-product" component={CreateProductPage} />
          <Route path="/edit-product/:id" component={UpdateProductPage} />
          */}
          <Switch>
              {routes.map(route => (
                  <Route key={route.key} path={route.path} exact={route.exact} component={route.component} />
              ))}
              <Route path="/test" exact component={Page404} />
              <Route path="*" exact component={Page404} />
          </Switch>

      </Container>

        {/*
      <Box>
        <Typography variant="body1">
          123111111111111111111111111111111111111111
        </Typography>

      </Box>
      <div className="ws">
        <div className="ws__cont">

          <div className="ws__content">
            <Switch>
              {routes.map(route => (
                <Route key={route.key} path={route.path} exact={route.exact} component={route.component} />
              ))}
              <Route path="*" exact render={() => <Page404 />} />
            </Switch>
          </div>

          <div className="ws__header">

          </div>

          <div className="ws__footer">

          </div>

        </div>
      </div>
      */}
    </ConnectedRouter>
  );
}

AppContainer.propTypes = {
  history: PropTypes.object,
};
