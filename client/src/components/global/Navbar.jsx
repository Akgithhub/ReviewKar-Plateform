import { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import uniqid from "uniqid";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";
import { useAuth, useUser } from "@clerk/clerk-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setactiveItem] = useState("home");
  const { isSignedIn } = useAuth();
  const { isUser } = useUser();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // Dispatch user data
  // dispatch(setUser({ name: 'Aman', clerkId: '123' }));
  const reviewDropDownList = [
    { id: uniqid(), name: "Restaurants", link: "/reviews/restaurants" },
    { id: uniqid(), name: "Hotels", link: "/reviews/hotels" },
    { id: uniqid(), name: "Clothing", link: "/reviews/clothing" },
    { id: uniqid(), name: "Movies", link: "/reviews/movies" },
    { id: uniqid(), name: "Beauty", link: "/reviews/beauty" },
    { id: uniqid(), name: "Teach", link: "/reviews/teach" },
    { id: uniqid(), name: "Bars", link: "/reviews/bars" },
  ];
  const catogeryDropDownList = [
    { id: uniqid(), name: "Restaurants", link: "/catogery/restaurants" },
    { id: uniqid(), name: "Hotels", link: "/catogery/hotels" },
    { id: uniqid(), name: "Clothing", link: "/catogery/clothing" },
    { id: uniqid(), name: "Movies", link: "/catogery/movies" },
    { id: uniqid(), name: "Beauty", link: "/catogery/beauty" },
    { id: uniqid(), name: "Teach", link: "/catogery/teach" },
    { id: uniqid(), name: "Bars", link: "/catogery/bars" },
  ];

  const toggleNav = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.getElementById("mobile-menu").style.backgroundColor =
        "white"; // Enable scrolling
    }
  };

  const changeBG = () => {
    const navbar = document.querySelector("nav");
    const navLogo = document.getElementById("nav-logo");
    const navItems = document.getElementById("nav-items");
    const logoutIconDekstop = document.getElementById("logout-icon-desktop");
    const logoutIconMobile = document.getElementById("logout-icon-mobile");
    const navToggle = document.getElementById("navtoggle");
    if (window.scrollY > 50) {
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
          <li className="relative group">
            <Link
              to="/reviews"
              className={`block${
                activeItem === "reviews"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-gray-200"
              }`}
              onClick={() => setactiveItem("reviews")}
            >
              Reviews
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute left-10 w-[300px] mt-2 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              {reviewDropDownList.map((item) => (
                <>
                  <ul className="py-2 text-sm text-gray-700 text-center">
                    <li key={item.id}>
                      <Link
                        to={item.link}
                        className="block px-2 py-2 hover:bg-blue-300 hover:text-white transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                    <hr className="w-[80%] mx-auto text-blue-200" />
                  </ul>
                </>
              ))}
              <div className="text-blue-700 text-[12px] font-semibold py-[10px] text-right pr-[20px]">
                {activeItem === "reviews" ? (
                  <></>
                ) : (
                  <Link to="/reviews">See All Reviews</Link>
                )}
              </div>
            </div>
          </li>
          <li className="relative group">
            <Link
              to="/catogery"
              className={`block${
                activeItem === "catogery"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-gray-200"
              }`}
              onClick={() => setactiveItem("catogery")}
            >
              Our Category
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute left-10 w-[300px] mt-2 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
              <ul className="py-2 text-sm text-gray-700 text-center">
                {catogeryDropDownList.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="block px-2 py-2 hover:bg-blue-300 hover:text-white transition"
                    >
                      {item.name}
                    </Link>
                    <hr className="w-[80%] mx-auto text-blue-200" />
                  </li>
                ))}
              </ul>
              <div className="text-blue-700 text-[12px] font-semibold py-[10px] text-right pr-[20px]">
                {activeItem === "catogery" ? (
                  <></>
                ) : (
                  <Link to="/catogery">See All Categories</Link>
                )}
              </div>
            </div>
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
            <Link to="/earn ">Earn</Link>
          </button>
          <button className="bg-gray-900 text-white rounded hover:bg-gray-800 py-2 px-4">
            <Link to="/pricing">Get Reviews</Link>
          </button>
          {isSignedIn || isUser ? (
            <>
              <div className="relative group inline-block">
                <button
                  onClick={() => {
                    window.location.href = "/my-cards";
                  }}
                  className="bg-blue-500 text-white rounded hover:bg-blue-600 py-2 px-4"
                >
                  <Link to="/my-cards">
                    <img src="./my-card.svg" alt="My Cards" />
                  </Link>
                </button>
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-3 px-4 min-w-[100px] text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  My Cards
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          <div
            id="logout-icon-desktop"
            className="text-xl text-white
            hover:text-black cursor-pointer"
          >
            <SignedOut>
              <SignInButton mode="modal">
                <img src="./log-in.svg" alt="" />
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        {/* Mobile Auth Icon */}
        <div
          id="logout-icon-mobile"
          className="md:hidden text-xl text-white hover:text-black cursor-pointer"
        >
          <SignedOut>
            <SignInButton mode="modal">
              <img src="./log-in.svg" alt="" />
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white mt-4 flex flex-col gap-4 text-[17px] font-semibold text-gray-700"
        >
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
            <Link to="/earn" onClick={toggleNav}>
              Earn
            </Link>
          </button>
          <button className="bg-gray-900 text-white rounded hover:bg-gray-800 py-2 px-4">
            <Link to="/pricing" onClick={toggleNav}>
              Get Reviews
            </Link>
          </button>
          {isSignedIn || isUser ? (
            <>
              <button className="bg-blue-500 text-white rounded hover:bg-blue-600 py-2 px-4">
                <Link to="/" onClick={toggleNav}>
                  My Cards
                </Link>
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
