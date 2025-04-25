import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Reviews from "./Pages/Reviews";
import Earn from "./Pages/Earn";
import Catogery from "./pages/Catogery";
import CatogeryReview from "./pages/CatogeryReview";
import useSyncUser from "./hooks/useSyncUser";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
const App = () => {
  useSyncUser();
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
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
