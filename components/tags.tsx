import Image from "next/image";
import LeftRight from "./leftright";
import checkImg from "@/images/check.png";

export default function Tags() {

	return (
		<div className="flex w-[50%] justify-between">
			<div className="flex gap-4 items-center">
				<Image src={checkImg} alt="check-mark" height={20}/>
				<div className="">Trustworthy</div>
			</div>
			<div className="flex gap-4 items-center">
				<Image src={checkImg} alt="check-mark" height={20}/>
				<div>Reliable</div>
			</div>
			<div className="flex gap-4 items-center">
				<Image src={checkImg} alt="check-mark" height={20}/>
				<div>Secure</div>
			</div>
		</div>
	)

}