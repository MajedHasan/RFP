
import About from "../AboutSection/About";
import Discover from "../AboutSection/Discover";
import GetEssentialSection from "../AboutSection/GetEssentialSection";
import CustomSliderTab from "../CustomSliderTab/CustomSliderTab";
import Banner from "../HeaderSection/Banner";
import EConInnerSection from "./EConInnerSection";


const HomePage = () => {
    return (
        <div>
            <Banner />
            <CustomSliderTab />
            <EConInnerSection />
            <About />
            <GetEssentialSection />
            <Discover />
        </div>
    );
};

export default HomePage;