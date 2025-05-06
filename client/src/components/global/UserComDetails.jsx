import { useSelector, useDispatch } from "react-redux";
import { toggleUserDetailsForm } from "@/redux/slices/userSlice";
import { useState } from "react";
const UserComDetails = () => {
  const userDetailsform = useSelector((state) => state.user.userDetailsform);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    company: "",
    description: "",
    address: "",
    city: "",
    country: "",
    website: "",
    email: "",
    telephone: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    otherSocial: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };
  return (
    <>
      {userDetailsform && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30">
          <div className="w-[95%] max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-xl overflow-y-auto max-h-[90vh]">
            <div className="relative">
              <button
                className="absolute cursor-pointer top-0 right-0 text-gray-400 hover:text-gray-600 text-2xl font-bold focus:outline-none"
                onClick={() => dispatch(toggleUserDetailsForm(false))}
                aria-label="Close"
              >
                &times;
              </button>

              <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
                Company Information
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Company Info */}
                <div className="space-y-4">
                  <div>
                    <label className="block font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Good Electronics"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      name="description"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Short company description"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="9785 Baker st. 567"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Los Angeles"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block font-medium text-gray-700">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="US"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Website
                    </label>
                    <input
                      type="text"
                      name="website"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="goodelectronics.com"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="info@goodelectronics.com"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Telephone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+542 542 566264"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    Social Media Links
                  </h3>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Facebook
                    </label>
                    <input
                      type="text"
                      name="facebook"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://facebook.com/yourpage"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Twitter
                    </label>
                    <input
                      type="text"
                      name="twitter"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://twitter.com/yourhandle"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      name="linkedin"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://linkedin.com/in/yourprofile"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Other
                    </label>
                    <input
                      type="text"
                      name="otherSocial"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Other social link (e.g., Instagram)"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserComDetails;
