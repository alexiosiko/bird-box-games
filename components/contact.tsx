import Image from "next/image";
import Description from "./description";
import Header from "./header";
import ContactImg from "@/images/contact.png";

export default function Contact() {
	return (
		<div className="contact m-40 mb-[200px]">
			<Header>Free Consulation!</Header>
			<Description>We want you to be happy with your expected results before we get started</Description>
			<Description>Reach out to
				<a className="text-[var(--accent)]" href="mailto:DevOlympus@hotmail.com">DevOlympus@hotmail.com</a>
				. Tell us a little bit about who you are and what you're looking for and we'll be so happy to team up and work together!
			</Description>
			<Image src={ContactImg} className="justify-center m-auto mt-12" alt="contact-img" />
		</div>
	)
}