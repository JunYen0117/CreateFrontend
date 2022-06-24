import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Member from './pages/Member';

import Header from './components/Header';
import Footer from './components/Footer';
import ThemePlanning from './pages/ThemePlanning';
import SignupLogin from './components/SignupLogin/SignupLogin';
import PwdChanging from './pages/PwdChanging';

function App() {
  return (
    <>
      <Header />

      <Router>
        <Switch>
          <Route path="/member">
            <Member />
          </Route>
          <Route path="/themeplanning">
            <ThemePlanning />
          </Route>
          <Route path="/product">

          </Route>
          <Route path="/user">

          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/pwdchanging">
            <PwdChanging />
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
