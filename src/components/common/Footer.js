import Image from "next/image";
import img2 from '../../Image/RFPIO_ISO_Badge.webp';
import logo from '../../Image/Responsive_logo_reverse.png';
import img1 from '../../Image/soc-1.webp';
const Footer = () => {
    return (
        <div className="bg-[#00283B] mt-10">
            <div className="container">
               <div className="py-12">
               <div className="flex md:flex-row flex-col justify-between md:items-center items-left ">
                    <div>
                        <div className="w-[210px]"><Image className="w-full h-full mb-[15px]" src={logo} alt="logo" /></div>
                        <h5 className="text-white text-[16px] mb-[20px]">Get started with the leader in strategic response management</h5>
                        <button class="bg-white hover:bg-[#00699b] hover:text-white text-[#00699b] font-bold py-2 px-4 rounded-full transition duration-300 border border-[#00699b] ">Download the toolkit</button>
                    </div>
                    <div>
                        <h3 className="text-[#eef2f3] text-[13px] font-extrabold mb-3 font-titleFont md:mt-0 mt-4">WHY Responsive?</h3>
                        <ul className="text-[#d1d5da] font-medium font-titleFont text-[14px]">
                          <li className="mt-2">Overview</li>
                          <li className="mt-2">Integrations</li>
                          <li className="mt-2">Profile Center</li>
                        </ul>
                    </div>
                    <div>
                    <h3 className="text-[#eef2f3] text-[13px] font-extrabold mb-3 font-titleFont md:mt-0 mt-4">COMPANY</h3>
                        <ul className="text-[#d1d5da] font-medium font-titleFont text-[14px]">
                          <li className="mt-2">About</li>
                          <li className="mt-2">Careers</li>
                          <li className="mt-2">Press</li>
                        </ul>
                    </div>
                </div>
                <hr className="border-[#677e88] my-10" />
                <div className="flex md:flex-row flex-col justify-between items-left md:items-center">
                    <div className="">
                    <ul className="text-[#91949e] flex md:flex-row flex-col gap-5" >
                          <li>EULA</li>
                          <li>Privacy Policy</li>
                          <li>AUP</li>
                          <li>More Legal Documents</li>
                          <li>© 2023, Responsive All Rights Reserved.</li>
                        </ul>
                    </div>
                    <div className="flex gap-4 md:justify-between items-center flex-row">
                        < Image className="w-[70px] h-[70px] object-cover" src={img1} alt="" />
                        < Image className="w-[70px] h-[70px] object-cover" src={img2} alt="" />
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Footer;