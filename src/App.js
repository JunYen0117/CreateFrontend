import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Product from './pages/Product';
import About from './pages/About';
import User from './pages/User';
import Home from './pages/Home';
import Activity from './pages/Activity';
import ActivityPayment from './pages/ActivityPayment'

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

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
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/activitypayment">
            <ActivityPayment />
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
