import Animate from "../Animations/animate";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
			<Animate>
          <SectionTitle
            title="What We Do"
            paragraph="Dev Olympus excels in creating dynamic websites and robust databases with streamlined solutions, ensuring efficient and comprehensive development that exceeds expectations."
            center
			/>
			</Animate>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => (
				<Animate key={index} delay={index / 3 + 0.5}>
					<SingleFeature key={feature.id} feature={feature} />

				</Animate>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
