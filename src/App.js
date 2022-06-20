import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import Products from './pages/Products';
import ProductDetail from './components/Products/ProductDetail';

import About from './pages/About';
import User from './pages/User';

function App() {
  return (
    <>
<<<<<<< HEAD
=======
      <Header />
      <Sidebar />
>>>>>>> dev
      <Router>
        <Header />
        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/product">
            <Products />
          </Route>
          <Route exact path="/productdetail">
            <ProductDetail />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
