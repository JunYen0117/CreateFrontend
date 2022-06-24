import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Member from './pages/Member';

import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Header />
        <Router>
          <Switch>
            <Route path="/member">
              <Member />
            </Route>
            <Route path="/home">
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      <Footer />
    </>
  );
}

export default App;
