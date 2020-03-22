import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // {<Header />}
    // {<Home />}
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Header</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Main />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    // {<Route path="/" component={Header} />
    // <Route path="/home" component={Home} />}
  );
}

export default App;

// function Hey() {
//   return <h1>Header</h1>;
// }

// function Home() {
//   return <h2>Home</h2>;
// }
