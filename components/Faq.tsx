"use client";
import React from "react";
import { Container } from "@/components/Container";
import Animate from "./animations/animate";

export const Faq = () => {
  return (
      <div id="faq" className="w-full max-w-2xl mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <Animate key={index} className="mb-10">
			<h1 className="font-bold mb-2">{item.question}</h1>
			<h1>{item.answer}</h1>
          </Animate>
        ))}
      </div>
  );
}

const faqdata = [
	{
	  question: "How long does it take to complete a project?",
	  answer: "Project timelines vary depending on complexity. A simple landing page for your business typically takes around 1 week. For a fully developed application with client authentication and advanced features, it may take several weeks.",
	},
	{
	  question: "What is your pricing structure?",
	  answer: "Our pricing is competitive with other software companies. We keep up with local market rates and aim to provide cost-effective solutions without compromising on quality. If you find a better deal elsewhere, we will beat it!",
	},
	{
	  question: "Do you offer custom software solutions?",
	  answer: "Yes! We work closely with our clients to understand their unique needs and deliver custom software solutions tailored specifically to their requirements.",
	},
	{
	  question: "Do you offer post-launch support and maintenance?",
	  answer: "Yes, we offer post-launch support and maintenance to ensure your project runs smoothly after deployment. We provide ongoing updates, bug fixes, and feature enhancements as needed.",
	},

  ];
  