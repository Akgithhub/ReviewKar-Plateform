import { useSelector, useDispatch } from "react-redux";
import { toggleUserDetailsForm } from "@/redux/slices/userSlice";
import { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { setUser } from "@/redux/slices/userSlice";
import { Alert } from "@mui/material";

const UserComDetails = () => {
  const userDetailsform = useSelector((state) => state.user.userDetailsform);
  const dispatch = useDispatch();
  const { user } = useUser();

  // Local state to manage form input data
  const [formData, setFormData] = useState({
    company: "",
    description: "",
    address: "",
    city: "",
    country: "",
    website: "",
    email: "",
    telephone: "",
    facebookUrl: "",
    twitterUrl: "",
    linkedinUrl: "",
    otherSocialUrl: "",
  });

  const [loading, setLoading] = useState(false); // To manage loading state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.patch(
        "http://localhost:3001/api/syncuser/update-user-comapny-details",
        {
          clerkId: user.id,
          company: formData.company,
          description: formData.description,
          address: formData.address,
          city: formData.city,
          country: formData.country,
          websiteUrl: formData.website,
          email: formData.email,
          telephoneUrl: formData.telephone,
          facebookUrl: formData.facebookUrl,
          twitterUrl: formData.twitterUrl,
          linkedinUrl: formData.linkedinUrl,
          otherSocialUrl: formData.otherSocialUrl,
        }
      );

      if (res.status === 200) {
        // console.log("User details updated successfully:", res.data.user);
        dispatch(toggleUserDetailsForm(false)); // Close modal
        dispatch(setUser(res.data.user)); // Update Redux state with new user data
     
      } else {
        console.log("Failed to update user details");
      }
    } catch (error) {
      console.log("Error Updating User Details:", error);
    } finally {
      setLoading(false);
    }
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

            {/* Company Info Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Column: Company Info */}
                <div className="space-y-4">
                  {[
                    {
                      name: "company",
                      label: "Company Name",
                      placeholder: "Good Electronics",
                    },
                    {
                      name: "description",
                      label: "Description",
                      type: "textarea",
                      placeholder: "Short company description",
                    },
                    {
                      name: "address",
                      label: "Address",
                      placeholder: "9785 Baker st. 567",
                    },
                    { name: "city", label: "City", placeholder: "Los Angeles" },
                    { name: "country", label: "Country", placeholder: "US" },
                    {
                      name: "website",
                      label: "Website",
                      placeholder: "goodelectronics.com",
                    },
                    {
                      name: "email",
                      label: "Email",
                      type: "email",
                      placeholder: "info@goodelectronics.com",
                    },
                    {
                      name: "telephone",
                      label: "Telephone",
                      type: "tel",
                      placeholder: "+542 542 566264",
                    },
                  ].map(({ name, label, type = "text", placeholder }) => (
                    <div key={name}>
                      <label className="block font-medium text-gray-700">
                        {label}
                      </label>
                      {type === "textarea" ? (
                        <textarea
                          name={name}
                          value={formData[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <input
                          type={type}
                          name={name}
                          value={formData[name]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Column: Social Media Links */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    Social Media Links
                  </h3>
                  {[
                    {
                      name: "facebookUrl",
                      label: "Facebook",
                      placeholder: "https://facebook.com/yourpage",
                    },
                    {
                      name: "twitterUrl",
                      label: "Twitter",
                      placeholder: "https://twitter.com/yourhandle",
                    },
                    {
                      name: "linkedinUrl",
                      label: "LinkedIn",
                      placeholder: "https://linkedin.com/in/yourprofile",
                    },
                    {
                      name: "otherSocialUrl",
                      label: "Other",
                      placeholder: "Other social link (e.g., Instagram)",
                    },
                  ].map(({ name, label, placeholder }) => (
                    <div key={name}>
                      <label className="block font-medium text-gray-700">
                        {label}
                      </label>
                      <input
                        type="text"
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg transition duration-200 cursor-pointer ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-blue-700"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserComDetails;
