import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Login from "./pages/Login";
import Discord from "./pages/Discord";
function App() {
  return (
    <Router>
      <Fragment>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/login/discord" element={<Discord />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
