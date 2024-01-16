import Image from 'next/image';
import icon1 from "../../Image/MoreIcon/win-more-icon-1.webp";
import icon2 from "../../Image/MoreIcon/win-more-icon-2.webp";
import icon3 from "../../Image/MoreIcon/win-more-icon-3.webp";
import videoUrl from '../../Image/video/Responsive Project Lifecycle.mp4';
import thumbnailUrl from '../../Image/video/video_fallback.jpg';
import VideoPlayer from "./VideoPlayer";


const WinMoreSection = () => {
    return (
        
        <div className="container">
            <h2 className="font-extrabold text-[42px] text-headingColor text-center pt-12">Win more, do more with our complete RFX platform</h2>

            <div className="flex md:flex-row flex-col items-center gap-12 mt-12">
                <div className="md:w-1/2 w-full border">
                    <div className="w-full h-full">
                     <VideoPlayer videoUrl={videoUrl} thumbnailUrl={thumbnailUrl} />
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <div>
                        <div className='flex flex-row items-center gap-4'>
                           <div className=""> 
                             <Image className="w-full h-full object-cover" src={icon1} alt="" />
                            </div>
                           <div>
                             <h3 className="text-[19px] font-extrabold font-titleFont text-headingColor leading-[25px]">Centralize and manage all of your mission-critical content and documents</h3>
                             </div>
                        </div>
                        <div className='flex flex-row items-center gap-4 mt-4'>
                           <div className=""> 
                             <Image className="w-full h-full object-cover" src={icon2} alt="" />
                            </div>
                           <div>
                             <h3 className="text-[19px] font-extrabold font-titleFont text-headingColor leading-[25px]">Create, collaborate and communicate on response projects more efficiently</h3>
                             </div>
                        </div>
                        <div className='flex flex-row items-center gap-4 mt-4'>
                           <div className=""> 
                             <Image className="w-full h-full object-cover" src={icon3} alt="" />
                            </div>
                           <div>
                             <h3 className="text-[19px] font-extrabold font-titleFont text-headingColor leading-[25px]">Accelerate your response process with automation and AI-driven features</h3>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WinMoreSection;