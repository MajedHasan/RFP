import Image from 'next/image';
import img from '../../Image/Responsive_Report.webp';
import BackgroundShape from '../common/BackgroundShape';
import Title from '../common/Title';

const GetEssentialSection = () => {
    return (
    <div className='relative'>
        <BackgroundShape />
        <div className='container'>
            <div className="flex md:flex-row flex-col pt-16 gap-8">
                <div className="md:w-1/2 w-full">
                    <Title subtitle="Get essential templates and tips for winning RFPs" />
                    <p className="font-light font-titleFont text-[18px] my-7 text-gray-700">Every RFP is an opportunity to win new business, so we put together <span className="font-extrabold">The complete RFP response toolkit,</span> which contains everything you need to create customized templates for each element from the cover letter to proposed pricing — empowering you to respond quickly, consistently and confidently.</p>
                    <button class="bg-white hover:bg-[#00699b] hover:text-white text-[#00699b] font-bold py-2 px-4 rounded-full transition duration-300 border border-[#00699b] ">Download the toolkit</button>

                </div>
                <div className="md:w-1/2 w-full">
                    <div>
                        <Image src={img}  alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default GetEssentialSection;