import React from "react";
import Hero from "../components/global/Hero";
import PricingHero from "@/components/ui/PricingHero";
import PricingCards from "@/components/ui/PricingCards";
import CreateCardForm from "@/components/ui/CreateCardForm";
const Pricing = () => {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <CreateCardForm />
    </>
  );
};

export default Pricing;
