import Member from './pages/Member';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import ThemePlanning from './pages/ThemePlanning';
import SignupLogin from './components/SignupLogin/SignupLogin';
import PwdChanging from './pages/PwdChanging';

import Products from './pages/Products/Products';
import ProductDetail from './pages/Products/ProductDetail';
import Cart from './pages/Cart';

import { CartProvider } from './utils/useCart';
import { CheckListProvider } from './utils/useCheckList';

function App() {
  return (
    <CheckListProvider>
      <CartProvider localStorageKey="Cart">
        <Router>
          <>
            <Header />
            <ScrollToTop>
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
            </ScrollToTop>
            <Footer />
          </>
        </Router>
      </CartProvider>
    </CheckListProvider>
  );
}

export default App;
