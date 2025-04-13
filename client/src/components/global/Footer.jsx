import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { LiaXingSquare } from "react-icons/lia";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { HiOutlineHome, HiOutlineMail } from "react-icons/hi";
import { BiHeadphone } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 mb-10 ">
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Faq</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">My account</a>
            </li>
            <li>
              <a href="#">Create account</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#">Shops</a>
            </li>
            <li>
              <a href="#">Hotels</a>
            </li>
            <li>
              <a href="#">Restaurants</a>
            </li>
            <li>
              <a href="#">Bars</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">View all</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contacts</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <HiOutlineHome className="text-blue-600 mt-1" />
              <span>
                97845 Baker st. 567
                <br />
                Los Angeles - US
              </span>
            </li>
            <li className="flex items-center gap-2">
              <BiHeadphone className="text-blue-600" />
              <span>+61 23 8093 3400</span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineMail className="text-blue-600" />
              <span>info@domain.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-2">
          <h4 className="font-semibold mb-4">Keep in touch</h4>
          <form className="flex flex-col sm:flex-row max-w-sm">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none mb-2 sm:mb-0 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md text-sm"
            >
              Submit
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex items-center gap-4 text-gray-600 text-xl">
              <FaFacebookF />
              <LiaXingSquare />
              <FaInstagram />
              <FaTiktok />
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>

      <hr className="w-4/5 mx-auto border-t border-gray-300" />

      {/* Bottom Bar */}
      <div className="mt-10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 gap-4">
        <div className="flex items-center gap-2">
          <button className="border px-2 py-1 rounded text-sm flex items-center gap-1">
            English <HiOutlineGlobeAlt />
          </button>
        </div>
        <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
          <a href="#">Terms and conditions</a>
          <a href="#">Privacy</a>
          <span>© 2023 Vanno</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
