import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState } from 'react';
import Product from './pages/Product';
import About from './pages/About';
import User from './pages/User';
// import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';

import FavList from './pages/Fav/FavList';
import Order from './pages/ProductOrder/Order';

function App() {
  return (
    <>
      <Header />

      <Router>
        <Switch>
          <Route path="/fav">
            <FavList />
          </Route>
          <Route path="/order">
            <Order />
            {/* {isShowOL ? (
              <OrderList showOL={setIsShowOL} showOD={setIsShowOD} />
            ) : null}
            {isShowOD ? (
              <OrderDetail showOL={setIsShowOL} showOD={setIsShowOD} />
            ) : null}  */}
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route exact path="/">
          <Home />
        </Route> */}
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
