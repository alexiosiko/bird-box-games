import Image from "next/image";
import { frameworks } from "./data";
import { Button } from "./ui/button";
import Animatee from "./animations/animatee";
import TypewriterText from "./animations/typewriter";
import Link from "next/link";

export const Hero = () => {
  return (
    <div  className="md:h-screen flex flex-col justify-around">
      <div className="lg:flex"  >
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <div className="max-w-2xl mt-24 max-lg:text-center items-center max-lg:flex flex-col">
            <TypewriterText text="We Develop your Dreams." className="lg:text-5xl max-lg:text-2xl  font-bold leading-snug tracking-tight text-gray-800 dark:text-white" />
            <Animatee delay={1.75 } className="py-5  leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nextly is a free landing page & marketing website
              template for startups and indie projects. Its built with
              Next.js & TailwindCSS. And its completely open-source.
            </Animatee>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
				<Animatee delay={2}>
					<Button 
						className="px-8 py-4 text-lg ">
							<Link href="#contact">
								Get Started
							</Link>
					</Button>
				</Animatee>
				<Animatee delay={2} className="w-full">
					<Button variant={"outline"} className="max-lg:w-full">
						<Link href="#about">
						Learn More
						</Link>
					</Button>
				</Animatee>
            </div>
          </div>
        </div>
        <Animatee delay={2.5} className="flex items-center justify-center w-full lg:w-1/2">
			<iframe width={500} height={500} className="lg:relative bottom-8" src="https://lottie.host/embed/4f4d7922-7497-4b3f-99c8-7c8f90aa873d/Nb9CKQA4N8.json"></iframe>
        </Animatee>
      </div>
      <div>
		<div className="flex flex-col justify-center ">
			<div className="flex flex-wrap justify-center w-full gap-5 mt-10 relative 0 md:justify-around items-center">
				{frameworks.map((framework, index: number) => (
					<Animatee initial={{ y: -50, opacity: 0}} key={index} delay={(index / 10) + 3.2}>
						<Image width={124} height={20} className="object-contain" key={index} src={framework.src} alt={`Framework ${index}`} />
					</Animatee>
				))}
			</div>
		</div>
      </div>
    </div>
  );
}
