import React, { Component } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Newsapi from "./components/Newsapi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/News"
              element={
                <div className="container my-3">
                  <News pagesize="5" />
                </div>}>
            </Route>
            <Route
              path="/Newsapi"
              element={
                <div className="container my-3">
                  <Newsapi offset="0" />
                </div>}>
            </Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
