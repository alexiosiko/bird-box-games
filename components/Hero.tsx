import Image from "next/image";
import { frameworks } from "./data";
import { Button } from "./ui/button";
import Animate from "./animations/animate";
import TypewriterText from "./animations/typewriter";
import Link from "next/link";

export const Hero = () => {
  return (
    <div  className="h-screen flex flex-col justify-around">
      <div className="lg:flex"  >
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 max-lg:text-center items-center max-lg:flex flex-col">
            <TypewriterText text="We Develop your Dreams." className="text-5xl  font-bold leading-snug tracking-tight text-gray-800 dark:text-white" />
            <Animate delay={1.75 } className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nextly is a free landing page & marketing website
              template for startups and indie projects. Its built with
              Next.js & TailwindCSS. And its completely open-source.
            </Animate>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
				<Animate delay={2}>
					<Button
						className="px-8 py-4 text-lg ">
						Get Started
					</Button>
				</Animate>
				<Animate delay={2} className="w-full">
					<Button variant={"outline"} className="max-lg:w-full">
						<Link href="#about">
						Learn More
						</Link>
					</Button>
				</Animate>
            </div>
          </div>
        </div>
        <Animate delay={2.5} className="flex items-center justify-center w-full lg:w-1/2">
			<iframe width={500} height={500} src="https://lottie.host/embed/4f4d7922-7497-4b3f-99c8-7c8f90aa873d/Nb9CKQA4N8.json"></iframe>
        </Animate>
      </div>
      <Animate>
		<div className="flex flex-col justify-center">
			<Animate delay={4.5} className="text-center">
				Trusted by <span className="text-primary">2000+</span>{" "}
				customers worldwide
			</Animate>
			<div className="flex flex-wrap justify-center w-full gap-5 mt-10 relative 0 md:justify-around">
				{frameworks.map((framework, index: number) => (
					<Animate key={index} delay={(index / 10) + 3.2}>
						<Image width={124} height={20} className="object-contain" key={index} src={framework.src} alt={`Framework ${index}`} />
					</Animate>
				))}
			</div>
		</div>
      </Animate>
    </div>
  );
}
