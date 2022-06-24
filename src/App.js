import Member from './pages/Member';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

import FavList from './pages/FavList';
import Order from './pages/Order';

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
          </Switch>
          <Footer />
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
