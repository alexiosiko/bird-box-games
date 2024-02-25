import AboutSectionOne from "@/components/About/AboutSectionOne";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Dev Olympus',
	description: 'A software company based in Vancouver that develops applications',
  }

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      <Pricing />
      <Contact />
		
    </div>
  );
}
