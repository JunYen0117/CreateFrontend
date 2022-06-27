import Member from './pages/Member';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ThemePlanning from './pages/ThemePlanning';
import SignupLogin from './components/SignupLogin/SignupLogin';
import PwdChanging from './pages/PwdChanging';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

import Starter from './pages/Starter';

import { CartProvider } from './utils/useCart';

import ChangeStartFlag from './components/ChangeStartFlag';

function App() {
  const [start, setStart] = useState(true);

  return (
    <CartProvider localStorageKey="Cart">
      <Router>
        <>
          {/* <Starter /> */}
          <Header start={start} />
          <ChangeStartFlag setStart={setStart}>
            <Switch>
              <Route path="/">{start ? <Starter /> : () => <h1>123</h1>}</Route>
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
          </ChangeStartFlag>
          <Footer start={start} />
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
