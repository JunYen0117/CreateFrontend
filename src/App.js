import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

import About from './pages/About';
import User from './pages/User';

function App() {
  return (
    <>
      <Router>
        <>
          <Header />
          <Switch>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/about">
              <About />
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
      </Router>
    </>
  );
}

export default App;
