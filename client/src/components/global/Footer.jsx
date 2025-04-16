import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { LiaXingSquare } from "react-icons/lia";
import { Link } from "react-router-dom";
// import {
//   HiOutlineGlobeAlt,
//   HiOutlineHome,
//   HiOutlineMail,
// } from "react-icons/hi2";
import { BiHeadphone } from "react-icons/bi";

const footerSections = [
  {
    index: 0,
    name: "Quick Links",
    items: [
      { label: "About us", link: "/about" },
      { label: "Faq", link: "#" },
      { label: "Help", link: "#" },
      { label: "My Account", link: "#" },
      { label: "Create Account", link: "#" },
    ],
  },
  {
    index: 1,
    name: "Categories",
    items: [
      { label: "Shops", link: "#" },
      { label: "Hotels", link: "#" },
      { label: "Restaurants", link: "#" },
      { label: "Bars", link: "#" },
      { label: "Events", link: "#" },
      { label: "View All", link: "#" },
    ],
  },
  {
    index: 2,
    name: "Contact",
    items: [
      {
        label: (
          <>
            97845 Baker st. 567 <br />
            Los Angeles - US
          </>
        ),
      },
      { label: "+61 23 8093 3400", link: "#" },
      { label: "info@domain.com", link: "#" },
    ],
  },
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 mb-10">
        {/* Desktop Links */}
        {footerSections.map((section, index) => (
          <div key={index} className="hidden md:block">
            <h4 className="font-semibold mb-4">{section.name}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {section.items.map((item, i) => (
                <li key={item.index}>
                  <Link to={item.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Accordion for Mobile */}
        <div className="flex flex-col justify-center items-center md:hidden col-span-full">
          <div className="w-full max-w-md mx-auto mt-6 space-y-4">
            {footerSections.map((section, index) => (
              <div key={section.index}>
                <button
                  className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  {section.name}
                  <svg
                    className={`h-5 w-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <hr
                  className={openIndex === index ? "hidden" : "text-blue-300"}
                />
                {openIndex === index && (
                  <ul className="px-4 pb-4 text-gray-700">
                    {section.items.map((item, i) => (
                      <li key={i} className="py-2">
                        <Link to={item.link}>{item.label}</Link>
                        <hr className="text-blue-200" />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter & Socials */}
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
            English
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
