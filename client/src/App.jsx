import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import Earn from "./pages/Earn";
import Catogery from "./pages/Catogery";
import CatogeryReview from "./pages/CatogeryReview";
import MyCards from "./pages/MyCards";

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
            <Route path="earn" element={<Earn />} />
            <Route path="catogery" element={<Catogery />} />
            <Route path="single-catogery-review" element={<CatogeryReview />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/my-cards" element={<MyCards />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
