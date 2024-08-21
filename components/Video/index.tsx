"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Animate from "../Animations/animate";


const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
		<Animate >
			<SectionTitle
			title="We are ready to help"
			paragraph="Our team with over 10 years of combined experience are waiting to work and succeed with you!"
			center
			mb="80px"
			/>
		  </Animate>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <Animate className="relative  aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.jpg" alt="video image" fill />
                
              </Animate>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
