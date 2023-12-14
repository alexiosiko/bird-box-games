import Br from "./br";
import Header from "./header";
import Timeline from "./timeline";

export default function HowItWorks() {
	return (
		<div className="howitworks">
			<Header>How It Works</Header>
			<Br size={4}/>
			<Timeline />
		</div>
	)
}