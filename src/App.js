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

function App() {
  const [isShowOL, setIsShowOL] = useState(true);
  const [isShowOD, setIsShowOD] = useState(false);
  return (
    <>
      <Header />
      {isShowOL ? (
        <OrderList showOL={setIsShowOL} showOD={setIsShowOD} />
      ) : null}
      {isShowOD ? <OrderDetail /> : null}
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
