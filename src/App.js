import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Products from './pages/Products';
import About from './pages/About';
import User from './pages/User';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Products />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
