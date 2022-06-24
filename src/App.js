import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

import { CartProvider } from './utils/useCart';

function App() {
  return (
    <CartProvider localStorageKey="Cart">
      <Router>
        <>
          <Header />
          <Switch>
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
      </Router>
    </CartProvider>
  );
}

export default App;
