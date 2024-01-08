import Image from "next/image";
import icon from "@/images/icons/money.png";
import PricingCard from "../pricingcard";
import { basic, enterprise, pro } from "@/data/plans";

export default function Pricing() {
	return (
		<section className="flex justify-center gap-4">
			<PricingCard data={basic} />
			<PricingCard data={pro} middle={true} />
			<PricingCard data={enterprise} />
		</section>
	)
}