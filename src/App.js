import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route exact path={'/about'}>
            <About />
          </Route>
          <Route exact path={'/contact'}>
            <Contact />
          </Route>
          <Route exact path={'/portfolio'}>
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
