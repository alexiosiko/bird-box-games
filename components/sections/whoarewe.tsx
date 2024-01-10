import ColumnList from "../columnlist";
import LeftRight from "../leftright";
import Image from "next/image";
import Img from "@/images/svg/computer-graph.svg";
import Wallpaper from "@/components/wallpaper";
import wallpaperSVG from "@/images/svg/middle.svg";
import Header from "../header";

export default function WhoAreWe() {
  return (
    <div className="howitworks relative">
      <Wallpaper svg={wallpaperSVG} className="bottom-[-1000px]" />
      <LeftRight>
        <Image src={Img} alt="image" />
        <div className="p-24">
			<Header>Who Are We</Header>
			<br />
			<p className="text-base">
				At Dev Olympus, we focus on making awesome things that make our clients really happy. We always do our best to exceed expectations and ensure our clients love what we deliver. Quality is key for us, and it's what makes our solutions stand out and have a positive impact.
				</p>
		</div>
      </LeftRight>
    </div>
  );
}
