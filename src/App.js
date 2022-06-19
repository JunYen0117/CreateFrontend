import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState } from 'react';

import Product from './pages/Product';
import About from './pages/About';
import User from './pages/User';
// import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';
import OrderList from './pages/ProductOrder/OrderList';
import OrderDetail from './pages/ProductOrder/OrderDetail';
import FavProduct from './pages/Fav/FavProduct';
import FavActivity from './pages/Fav/FavActivity';
import FavArticle from './pages/Fav/FavArticle';

function App() {
  const [isShowOL, setIsShowOL] = useState(true);
  const [isShowOD, setIsShowOD] = useState(false);
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/favproduct/">
            <FavProduct />
          </Route>
          <Route path="/favarticle/">
            <FavArticle />
          </Route>
          <Route path="/favactivity/">
            <FavActivity />
          </Route>
          <Route path="/order">
            {isShowOL ? (
              <OrderList showOL={setIsShowOL} showOD={setIsShowOD} />
            ) : null}
            {isShowOD ? (
              <OrderDetail showOL={setIsShowOL} showOD={setIsShowOD} />
            ) : null}
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
      <Footer />
    </>
  );
}

export default App;
