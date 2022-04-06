import React, { Component } from "react";

import Movies from "./components/Movies";
import Series from "./components/Series";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/series">Series</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/series" element={<Series />}/>
            <Route path="/movies" element={<Movies />}/>
            <Route path="/" element={<Home />}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
