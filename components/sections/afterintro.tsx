import { afterIntroData } from "@/data/afterintrodata";
import Header from "../header";
import AfterIntroCard from "../afterintrocard";
import Wallpaper from "../wallpaper";
import wallpaperSVG from "@/images/wallpapers/whole.svg"

export default function AfterIntro() {
	return (
		<div>
			<Wallpaper className='' svg={wallpaperSVG} />
			<div className=" pt-24 mb-24 max-md:flex flex-col">
				<Header>
					Achieve all your software needs in one place
				</Header>
			</div>
			<div className="justify-center flex flex-wrap gap-14">
				{afterIntroData.map((data, index: number) =>
					<AfterIntroCard data={data} index={index} key={index} />
				)}
			</div>
		</div>
	)
}