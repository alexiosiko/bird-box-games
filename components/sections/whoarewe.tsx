import LeftRight from "../leftright";
import Image from "next/image";
import Img from "@/images/wallpapers/who-are-we.png";
import Header from "../header";
import Description from "../description";

export default function WhoAreWe() {
  return (
    <div className="howitworks relative">
      <LeftRight>
        <Image width={700} src={Img} alt="image" />
        <div className="">
			<Header>Who Are We</Header>
			<br />
			<Description className="!text-left">
				At Dev Olympus, we focus on making awesome things that make our clients really happy. We always do our best to exceed expectations and ensure our clients love what we deliver. Quality is key for us, and it's what makes our solutions stand out and have a positive impact.
				</Description>
		</div>
      </LeftRight>
    </div>
  );
}
