import { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setactiveItem] = useState("home");

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const changeBG = () => {
    const navbar = document.querySelector("nav");
    const navLogo = document.getElementById("nav-logo");
    const navItems = document.getElementById("nav-items");
    const logoutIconDekstop = document.getElementById("logout-icon-desktop");
    const logoutIconMobile = document.getElementById("logout-icon-mobile");
    const navToggle = document.getElementById("navtoggle");
    if (window.scrollY > 500) {
      navbar.classList.add("bg-white", "shadow-lg");
      navbar.classList.remove("bg-transparent");

      if (navLogo) {
        navLogo.src = "./reviewKar-vv.png"; // white background logo
      }
      if (navItems) {
        navItems.classList.remove("text-white");
        navItems.classList.add("text-gray-700"); // Change text color to gray
      }
      if (logoutIconDekstop) {
        logoutIconDekstop.classList.remove("text-white");
        logoutIconDekstop.classList.add("text-gray-700"); // Change text color to gray
      }
      if (logoutIconMobile) {
        logoutIconMobile.classList.remove("text-white");
        logoutIconMobile.classList.add("text-gray-700"); // Change text color to gray
      }
      if (navToggle) {
        navToggle.classList.remove("text-white");
        navToggle.classList.add("text-gray-700"); // Change text color to gray
      }
    } else {
      navbar.classList.remove("bg-white", "shadow-lg");
      navbar.classList.add("bg-transparent");

      if (navLogo) {
        navLogo.src = "./reviewKar.png"; // transparent background logo
      }
      if (navItems) {
        navItems.classList.remove("text-gray-700");
        navItems.classList.add("text-white"); // Change text color to gray
      }
      if (logoutIconDekstop) {
        logoutIconDekstop.classList.remove("text-gray-700");
        logoutIconDekstop.classList.add("text-white"); // Change text color to gray
      }
      if (logoutIconMobile) {
        logoutIconMobile.classList.remove("text-gray-700");
        logoutIconMobile.classList.add("text-white"); // Change text color to gray
      }
      if (navToggle) {
        navToggle.classList.remove("text-gray-700");
        navToggle.classList.add("text-white"); // Change text color to gray
      }
    }
  };

  // Attach scroll listener on mount
  useEffect(() => {
    window.addEventListener("scroll", changeBG);
    return () => window.removeEventListener("scroll", changeBG);
  }, []);

  return (
    <nav
      onScroll={changeBG}
      className="bg-transparent px-6 py-4 fixed top-0 left-0 w-full z-20"
    >
      <div className="flex justify-between items-center">
        {/* Logo + Toggle */}
        <div className="flex items-center gap-3">
          <button
            id="navtoggle"
            className="md:hidden text-2xl text-white"
            onClick={toggleNav}
          >
            ☰
          </button>
          <Link to="/">
            <img
              id="nav-logo"
              src="./reviewKar.png"
              alt="Logo"
              className="md:h-[50px] h-[35px] w-auto mx-auto pt-[4px] md:pt-0"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul
          id="nav-items"
          className="hidden md:flex gap-6 text-[17px] font-semibold text-white"
        >
          <li>
            <Link
              to="/"
              className={
                activeItem === "home"
                  ? "hover:text-gray-200 border-b-2 border-blue-600"
                  : "hover:text-gray-200"
              }
              onClick={() => setactiveItem("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                activeItem === "about"
                  ? "hover:text-gray-200 border-b-2 border-blue-600"
                  : "hover:text-gray-200"
              }
              onClick={() => setactiveItem("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              className={
                activeItem === "reviews"
                  ? "hover:text-gray-200 border-b-2 border-blue-600"
                  : "hover:text-gray-200"
              }
              onClick={() => setactiveItem("reviews")}
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/catogery"
              className={
                activeItem === "catogery"
                  ? "hover:text-gray-200 border-b-2 border-blue-600"
                  : "hover:text-gray-200"
              }
              onClick={() => setactiveItem("catogery")}
            >
              Our Catogery
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className={
                activeItem === "pricing"
                  ? "hover:text-gray-200 border-b-2 border-blue-600"
                  : "hover:text-gray-200"
              }
              onClick={() => setactiveItem("pricing")}
            >
              Pricing
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <button className="bg-blue-500 text-white rounded hover:bg-blue-600 py-2 px-4">
          <Link to="/earn ">
            Earn
          </Link>
          </button>
          <button className="bg-gray-900 text-white rounded hover:bg-gray-800 py-2 px-4">
          <Link to="/pricing">
            Get Reviews
          </Link>
          </button>
          <FiLogOut
            id="logout-icon-desktop"
            className="text-xl text-white hover:text-black cursor-pointer"
          />
        </div>

        {/* Mobile Logout Icon */}
        <FiLogOut
          id="logout-icon-mobile"
          className="md:hidden text-xl text-white hover:text-black cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white mt-4 flex flex-col gap-4 text-[17px] font-semibold text-gray-700">
          <Link
            to="/"
            className={
              activeItem === "home"
                ? "hover:text-gray-200 border-b-2 border-blue-600"
                : "hover:text-gray-200"
            }
            onClick={() => {
              setactiveItem("home");
              toggleNav(); // call both onClick functions here
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={
              activeItem === "about"
                ? "hover:text-gray-200 border-b-2 border-blue-600"
                : "hover:text-gray-200"
            }
            onClick={() => {
              setactiveItem("about");
              toggleNav(); // call both onClick functions here
            }}
          >
            About
          </Link>
          <Link
            to="/reviews"
            className={
              activeItem === "reviews"
                ? "hover:text-gray-200 border-b-2 border-blue-600"
                : "hover:text-gray-200"
            }
            onClick={() => {
              setactiveItem("reviews");
              toggleNav(); // call both onClick functions here
            }}
          >
            Reviews
          </Link>
          <Link
            to="/pricing"
            className={
              activeItem === "pricing"
                ? "hover:text-gray-200 border-b-2 border-blue-600"
                : "hover:text-gray-200"
            }
            onClick={() => {
              setactiveItem("pricing");
              toggleNav(); // call both onClick functions here
            }}
          >
            Pricing
          </Link>
          <Link
            to="/catogery"
            className={
              activeItem === "catogery"
                ? "hover:text-gray-200 border-b-2 border-blue-600"
                : "hover:text-gray-200"
            }
            onClick={() => {
              setactiveItem("catogery");
              toggleNav(); // call both onClick functions here
            }}
          >
            Our Catogery
          </Link>

          <button className="bg-blue-500 text-white rounded hover:bg-blue-600 py-2 px-4">
          <Link to="/earn">
            Earn
          </Link>
          </button>
          <button className="bg-gray-900 text-white rounded hover:bg-gray-800 py-2 px-4">
          <Link to="/pricing">
            Get Reviews
          </Link>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
