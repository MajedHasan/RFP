import Image from "next/image";
import Marquee from "react-fast-marquee";
import img1 from '../../Image/teamsImg/img1.webp';
import img10 from '../../Image/teamsImg/img10.webp';
import img2 from '../../Image/teamsImg/img2.webp';
import img3 from '../../Image/teamsImg/img3.webp';
import img4 from '../../Image/teamsImg/img4.webp';
import img5 from '../../Image/teamsImg/img5.webp';
import img6 from '../../Image/teamsImg/img6.webp';
import img7 from '../../Image/teamsImg/img7.webp';
import img8 from '../../Image/teamsImg/img8.webp';
import img9 from '../../Image/teamsImg/img9.webp';


const BannerTeamsSlider = () => {

   

    return (
        <div>
            <h2 className="font-bold text-[32px] text-headingColor text-center mt-[50px] mb-4">Trusted by the world’s best response teams</h2>
            {/* slider  */}
            <div className="pb-20 pt-5">
            <Marquee>
                <div className="w-[132px] h-[66px] mr-[10px]">
                    <Image className="w-full h-full object-cover" src={img1}
                     alt="img1" />
                </div>
                <div className="w-[132px] h-[66px] mr-[10px]">
                    <Image className="w-full h-full object-cover" src={img2}
                     alt="img2" />
                </div>
                <div className="w-[132px] h-[66px] mr-[10px]">
                    <Image className="w-full h-full object-cover" src={img3}
                     alt="img3" />
                </div>
                <div className="w-[132px] h-[66px] mr-[10px]">
                    <Image className="w-full h-full object-cover" src={img4}
                     alt="img4" />
                </div>
                <div className="w-[132px] h-[66px] mr-[10px]">
                    <Image className="w-full h-full object-cover" src={img5}
                     alt="img5" />
                </div>
                <div className="w-[132px] h-[66px] mr-[10px]">
                    <Image className="w-full h-full object-cover" src={img6}
                     alt="img6" />
                </div>
                <div className="w-[132px] h-[66px] mr-[10px]">
                    <Image className="w-full h-full object-cover" src={img7}
                     alt="img7" />
                </div>
                <div className="w-[132px] h-[66px] mr-[10px]">
                    <Image className="w-full h-full object-cover" src={img8}
                     alt="img8" />
                </div>
                <div className="w-[132px] h-[66px] mr-[10px]">
                    <Image className="w-full h-full object-cover" src={img9}
                     alt="img9" />
                </div>
                <div className="w-[132px] h-[66px] mr-[10px]">
                    <Image className="w-full h-full object-cover" src={img10}
                     alt="img10" />
                </div>
            </Marquee>
            </div>
        </div>
    );
};

export default BannerTeamsSlider;