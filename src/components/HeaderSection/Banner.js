"use client"
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import bannerImg from '../../Image/Responsive_Homepage_banner.jpg';
import Button from "../common/Button/Button";
import BannerTeamsSlider from "./BannerTeamsSlider";

const Banner = () => {

    const [text] = useTypewriter({
        words: ["strategic", "efficient", "successful", "responsive"],
        loop: 0,
      });

    return (       
        <div className="bg-displayBodyColor w-full" >
            <div className="container">
                <div className="flex md:flex-row justify-center items-center flex-col gap-4 py-12">
                    <div className="md:w-1/2 w-full">
                        <h3 className="text-titleColor text-[14px] 
                         uppercase font-bold">STRATEGIC RESPONSE MANAGEMENT & RFP SOFTWARE</h3>
                         <h1 className="text-[58px] text-headingColor font-bold font-titleFont">Be more</h1>
                         <div>
                            <span className="text-headingColor text-[58px]  font-bold">{text}</span>
                             <Cursor  />
                         </div>
                         <p className="text-[22px] font-light mt-2">
                         Respond with confidence to every information request <span className="font-bold text-headingColor">(RFP, RFI, ESG, DDQ, security questionnaire and more)</span> — generating more revenue with less risk through better collaboration and automation.
                         </p>
                         <Button button="CONTACT SALES" />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <Image className="w-full h-full object-fit" src={bannerImg} alt="Responsive_Homepage_banner" />
                    </div>
                </div>
                {/* Banner teams slider  */}
                <BannerTeamsSlider />
            </div>
        </div>
    );
};

export default Banner;