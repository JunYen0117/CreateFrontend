import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Product from './pages/Product';
import About from './pages/About';
import User from './pages/User';
import Home from './pages/Home';
import FrontPage from './pages/FrontPage';
import BrandPage from './pages/BrandPage';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <FrontPage />
      {/* <BrandPage /> */}
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
