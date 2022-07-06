import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from './utils/config';
import Member from './pages/Member';
import Coupon from './pages/Coupon';
import Starter from './pages/Starter';

import FrontPage from './pages/FrontPage';

import Header from './components/Header';
import Footer from './components/Footer';
import BrandPage from './pages/BrandPage';
import BrandStores from './pages/BrandStores';
import Course from './pages/Course';
import Exhibition from './pages/Exhibition';
import ExhibitionExplore from './pages/ExhibitionExplore';
import Activity from './pages/Activity';
import ActivityPayment from './pages/ActivityPayment';

import ThemePlanning from './pages/ThemePlanning';
import PwdChanging from './pages/PwdChanging';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

import { CartProvider } from './utils/useCart';
import { LoginProvider } from './utils/useLogin';

import FavList from './pages/Fav/FavList';
import Order from './pages/ProductOrder/Order';

function App() {
  return (
    <LoginProvider>
      <CartProvider localStorageKey="Cart">
        <Router>
          <>
            <Switch>
              <Route exact path="/">
                <Starter />
              </Route>
            </Switch>
            <Header />
            <Switch>
              <Route path="/Front">
                <FrontPage />
              </Route>
              <Route path="/Brand">
                <BrandPage />
              </Route>
              <Route path="/BrandStores">
                <BrandStores />
              </Route>
              <Route path="/course">
                <Course />
              </Route>
              <Route path="/Coupon">
                <Coupon />
              </Route>
              <Route path="/activity">
                <Activity />
              </Route>
              <Route path="/activitypayment">
                <ActivityPayment />
              </Route>
              <Route path="/member">
                <Member />
              </Route>
              <Route path="/themeplanning">
                <ThemePlanning />
              </Route>
              <Route path="/pwdchanging">
                <PwdChanging />
              </Route>
              <Route path="/product/detail">
                <ProductDetail />
              </Route>
              <Route path="/product">
                <Products />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/fav">
                <FavList />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
              <Route path="/exhibition/:exhibitionId">
                <Exhibition />
              </Route>
              <Route path="/exhibition">
                <ExhibitionExplore />
              </Route>
            </Switch>
            <Footer />
          </>
        </Router>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
