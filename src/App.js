import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Product from './pages/Product';
import About from './pages/About';
import User from './pages/User';
import Home from './pages/Home';
import Coupon from './pages/Coupon';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <Router>
          <Switch>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/coupon">
              <Coupon />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
