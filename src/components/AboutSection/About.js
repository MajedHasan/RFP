import BackgroundShape from "../common/BackgroundShape";
import OwlCarouselComponent from "./OwlCarouselComponent";
import RealizeMoreSection from "./RealizeMoreSection";
import ThreeCards from "./ThreeCards";
import WhyCustomers from "./WhyCustomers";
import WinMoreSection from "./WinMoreSection";

const About = () => {
  return (
    <div className="relative">
      <BackgroundShape svgColor="fill-white" />
      <div className="bg-displayBodyColor py-24 mt-10">
        <WinMoreSection />
        <WhyCustomers />
        <RealizeMoreSection />
        <ThreeCards />
        <OwlCarouselComponent />
      </div>
    </div>
  );
};

export default About;
