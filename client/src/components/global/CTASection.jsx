import { Link } from "react-router-dom";
const CTASection = ({title, subtitle, bgimage, btnText,btnUrl}) => {
    return (
      <section className="bg-gradient-to-b from-[#0d1121] to-[#01194a] py-16 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">

          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
            {title}
          </h2>
          <h3 className="text-white pb-8">{subtitle}</h3>
          <Link
            to={btnUrl}
            className="inline-block bg-white text-blue-600 font-medium px-6 py-2 rounded hover:bg-gray-100 transition"
          >
           {btnText}
          </Link>
        </div>
      </section>
    );
  };
  
  export default CTASection;
  