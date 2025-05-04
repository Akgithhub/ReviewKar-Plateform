import Hero from "@/components/global/Hero";

const ProfileDashboard = () => {
  const profileHeroData = {
    title: "Profile",
    subtitle: `Welcome to your profile! Here you can manage your information, view your activity, and customize your experience.`,
    buttonText: "Edit Profile",
    bgImage: "./pricing-hero.jpg",
    inputSection: false,
  };
  return (
    <div className="text-black rounded-lg mx-auto ">
      {/* Header Section */}

      <div className="absolute left-6 -bottom-10 z-10">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQFifcFvky0BLg/profile-displayphoto-shrink_200_200/B56ZZ2VWLpGkAc-/0/1745742030048?e=1751500800&v=beta&t=UI62V_XJiVEsylzat2bWJKR3N4GN44JXX-qlrTGblVo" // Replace with actual profile image path
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
      </div>

      {/* Profile Info */}
      <div className="mt-14 ml-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Aman Khan
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
            ✔
          </span>
        </h1>
        <p className="text-sm text-gray-300">He/Him</p>
        <p className="mt-1 text-gray-100 font-semibold">
          Full Stack Developer @AuCourantCyberspace | AI | LLM | Deep Learning |
          MERN | Coding Enthusiast | System Design
        </p>
        <p className="text-gray-400 text-sm mt-1">
          Karnal, Haryana, India •{" "}
          <a href="#" className="underline">
            Contact info
          </a>
        </p>
        <a
          href="https://portfolio.me"
          className="text-blue-400 text-sm mt-1 inline-block"
        >
          Portfolio.Me ↗
        </a>

        {/* Logos */}
        <div className="flex gap-4 mt-4">
          <img src="/company-logo.png" alt="Company" className="w-10 h-10" />
          <img
            src="/university-logo.png"
            alt="University"
            className="w-10 h-10"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6 ml-6 flex-wrap">
        <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded text-sm">
          Open to
        </button>
        <button className="bg-gray-800 px-4 py-2 rounded text-sm">
          Add profile section
        </button>
        <button className="bg-gray-800 px-4 py-2 rounded text-sm">
          Enhance profile
        </button>
        <button className="bg-gray-800 px-4 py-2 rounded text-sm">
          Resources
        </button>
      </div>

      {/* Open to Work Section */}
      <div className="mt-6 ml-6 bg-[#2c2c2c] p-4 rounded-lg">
        <h2 className="text-md font-semibold">Open to work</h2>
        <p className="text-sm text-gray-300">
          Web Developer, Software Engineer and Software Developer
        </p>
      </div>
    </div>
  );
};
export default ProfileDashboard;
