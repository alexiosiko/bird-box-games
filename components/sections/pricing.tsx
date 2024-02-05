import Br from "../br";
import DownUpMotion from "../downupmotion";
import Header from "../header";
import PricingCard from "../pricingcard";
import { basic, enterprise, pro } from "@/data/plans";

export default function Pricing() {
	return (
		<section>
			<DownUpMotion>
				<Header className="text-center">Our Plans</Header>
			</DownUpMotion>
			<Br size={3} />
			<div className="flex justify-center gap-4">
				<PricingCard data={basic} />
				<PricingCard data={pro} middle={true} />
				<PricingCard data={enterprise} />
			</div>
		</section>
	)
}