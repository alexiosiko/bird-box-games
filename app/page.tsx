"use client"

import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Faq } from "@/components/Faq";
import { benefitTwo } from "@/components/data";
import { Portfolio } from "@/components/Portfolio";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div id="home" className="max-w-7xl mx-auto max-lg:pl-4 max-lg:pr-4">
      <Hero />
	  <div className="h-24 lg:hidden"/>

      <SectionTitle
	  id="about"
        preTitle="About Us"
        title="Why Choose Poly Tech?"
      >
        We are a small team of developers with over 20 years of combined experience. 
        Our top priority is delivering exceptional results to our clients. 
        We collaborate closely to ensure complete transparency and 
        100% satisfaction with the final product.
      </SectionTitle>
	  <div className="h-24"/>

      {/* <Benefits data={benefitOne} /> */}
      <Benefits imgPos="right" data={benefitTwo} />
	  <div className="h-24"/>

		<Portfolio />
	  <div className="h-24"/>
     
      <SectionTitle id="faq" preTitle="FAQ" title="Frequently Asked Questions" />
	  <div className="h-12"/>
	  
      <Faq />

	  <Contact />

    </div>
  );
}
