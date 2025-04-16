import React from "react";

const PricingHero = () => {
  return (
    <section class="bg-[url('./pricing-hero.jpg')] bg-cover bg-no-repeat bg-center h-[60vh] text-white relative flex flex-col justify-center items-center">
     <div class="absolute inset-0 bg-black/60 z-0"></div>
        <div class="max-w-2xl mx-auto px-4 z-10">
          <h2 class="text-3xl md:text-5xl font-bold text-center">
            ReviewKar Pricing Plans
          </h2>
          <p class="mt-4 text-[16px] md:text-lg text-gray-100 text-center">
            ReviewKar helps grow your business using customer reviews
          </p>
        </div>
 
    </section>
  );
};

export default PricingHero;
