
import benefitOneImg from "@/public/benefit-one.png";
import { FcCurrencyExchange, FcDataProtection, FcSerialTasks    } from "react-icons/fc";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: null,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: null,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: null,
    },
  ],
};

const benefitTwo = {
  title: "What We Can Do",
  desc: "We specialize in full-stack development, offering professional solutions for products that can be accessed through all devices.",
  image: <iframe  width={1000} height={400}  src="https://lottie.host/embed/f8760af8-c78f-4b04-bb76-2c87e65b91c9/5Mly3e2aHK.json"></iframe>
  ,
  bullets: [
    {
      title: "Custom API Development",
      desc: "We build APIs for whatever your business needs—whether it’s booking systems, inventory management, or something custom.",
      icon: <FcSerialTasks  size={24} />,
    },
    {
      title: "Payment Integration",
      desc: "We can set up secure payment systems, including subscriptions and e-commerce, no problem.",
      icon: <FcCurrencyExchange size={24} />,
    },
    {
      title: "Auth, Databases, & Deployment",
      desc: "We handle user authentication, manage databases, and make sure your app is secure and scalable. Plus, we can deploy it natively to mobile and desktop.",
      icon: <FcDataProtection  size={24} />,
    },
  ],
};

export const frameworks = [
	{

		src: "/frameworks/clerk.png",
	},
	{

		src: "/frameworks/framer.png",
	},
	{

		src: "/frameworks/mongodb.png",
	},
	{

		src: "/frameworks/node.png",
	},
	{

		src: "/frameworks/shadcn.png",
	},
	{

		src: "/frameworks/unity.png",
	},
	

]

export {benefitOne, benefitTwo};
