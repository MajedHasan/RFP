import Image from 'next/image';
import img from '../../Image/responsive-Integrations-new.webp';
import Link from '../common/Link';
import Title from '../common/Title';

const RealizeMoreSection = () => {
    return (
        <div className="container">
            <div className="flex md:flex-row flex-col items-center gap-8 mt-[80px]">
                <div className="md:w-1/2 w-full">
                    <Image className="w-full h-full object-cover" src={img} alt="" />
                </div>
                <div className="md:w-1/2 w-full">
                    <div>
                        <Title subtitle="Realize more business value with the most integrations" />
                        <p className="font-light font-titleFont text-[18px] my-7">With our best-in-class approach, you can streamline sales, proposal-building and other business processes by integrating your favorite applications with Responsive.</p>
                     <span><Link Link="Learn more about our integrations" /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealizeMoreSection;