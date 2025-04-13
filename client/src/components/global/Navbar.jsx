import { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo + Toggle */}
        <div className="flex items-center gap-3">
          <button className="md:hidden text-2xl" onClick={toggleNav}>
            ☰
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img src="" alt="Logo" className="mx-auto" />
            <span className="hidden md:block text-xl font-bold text-gray-800">
              ReviewKar
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-[17px] font-semibold text-gray-700">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/reviews" className="hover:text-blue-600">Reviews</Link></li>
          <li><Link to="/pricing" className="hover:text-blue-600">Pricing</Link></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 items-center">
          <button className="bg-blue-500 text-white rounded hover:bg-blue-600 py-2 px-4">
            Earn
          </button>
          <button className="bg-gray-900 text-white rounded hover:bg-gray-800 py-2 px-4">
            Get Reviews
          </button>
          <FiLogOut className="text-xl text-gray-600 hover:text-black cursor-pointer" />
        </div>

        {/* Mobile Logout Icon */}
        <FiLogOut className="md:hidden text-xl text-gray-600 hover:text-black cursor-pointer" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-[17px] font-semibold text-gray-700">
          <Link to="/" className="hover:text-blue-600" onClick={toggleNav}>Home</Link>
          <Link to="/about" className="hover:text-blue-600" onClick={toggleNav}>About</Link>
          <Link to="/reviews" className="hover:text-blue-600" onClick={toggleNav}>Reviews</Link>
          <Link to="/pricing" className="hover:text-blue-600" onClick={toggleNav}>Pricing</Link>
          <button className="bg-blue-500 text-white rounded hover:bg-blue-600 py-2 px-4">
            Earn
          </button>
          <button className="bg-gray-900 text-white rounded hover:bg-gray-800 py-2 px-4">
            Get Reviews
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
