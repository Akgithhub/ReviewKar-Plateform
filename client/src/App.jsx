import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Reviews from "./Pages/Reviews";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="pricing" element={<Pricing />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
