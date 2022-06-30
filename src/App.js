import Member from './pages/Member';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { API_URL } from './utils/config';

import About from './pages/About';
import User from './pages/User';
// import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';
import ThemePlanning from './pages/ThemePlanning';
import SignupLogin from './components/SignupLogin/SignupLogin';
import PwdChanging from './pages/PwdChanging';
import ListItem from './components/ProductOrder/ListItem';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

import { CartProvider } from './utils/useCart';

import FavList from './pages/FavList';
import Order from './pages/Order';
import axios from 'axios';

function App() {
  // useEffect(() => {
  //   let getproduct = async () => {
  //     let response = await axios.get(`${API_URL}/favproduct/1`);

  //     localStorage.removeItem('fav');
  //     localStorage.setItem('fav', JSON.stringify(response.data));
  //     // console.log(response.data);
  //   };
  //   getproduct();
  // }, []);

  return (
    <CartProvider localStorageKey="Cart">
      <Router>
        <>
          <Header />
          <Switch>
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
            <Route path="/Miu">
              <ListItem />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
          </Switch>
          <Footer />
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
