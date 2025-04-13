import React from "react";

const Helpyou = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-[400px] md:h-[500px]"
        style={{ backgroundImage: "url('./help-you.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center px-6 md:px-10 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Let's Help You
          </h2>
          <p className="text-sm md:text-base mb-6 max-w-xl">
            Vanno is a review platform open to everyone. Share your experiences
            to help others make better choices, and help companies up their
            game. Our mission is to bring people and companies together to
            create experiences for everyone.
          </p>
          <button className="bg-blue-600 hover:bg-yellow-400 hover:text-black text-white font-semibold px-6 py-2 rounded transition duration-300 ease-in-out">
            Join Vanno Now!
          </button>
        </div>
      </section>
    </>
  );
};

export default Helpyou;
