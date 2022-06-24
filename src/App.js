import Member from './pages/Member';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './pages/Product';
import About from './pages/About';
import User from './pages/User';
// import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';
import ThemePlanning from './pages/ThemePlanning';
import SignupLogin from './components/SignupLogin/SignupLogin';
import PwdChanging from './pages/PwdChanging';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

import { CartProvider } from './utils/useCart';

import FavList from './pages/Fav/FavList';
import Order from './pages/ProductOrder/Order';

function App() {
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
          </Switch>
          <Footer />
        </>
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
    </CartProvider>
  );
}

export default App;
