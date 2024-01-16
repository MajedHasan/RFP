import Image from 'next/image';
import img3 from '../../Image/MoreIcon/why-customers-icon-1.webp';
import img2 from '../../Image/MoreIcon/why-customers-icon-2.webp';
import img1 from '../../Image/MoreIcon/win-more-icon-3.webp';

const ThreeCards = () => {
    return (
        <div className='container'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[100px]">
                <div className='flex flex-col justify-center items-center text-center'>
                    <div className='w-[85px] h-[85px]'><Image className='w-full h-full object-cover' src={img1} alt="" /></div>
                    <h2 className="text-[24px] text-headingColor my-3 font-extrabold font-titleFont leading-[28px]">Provide the best, most intuitive user experience</h2>
                    <p className="font-light font-titleFont text-gray-600">Through purposeful design, thoughtful workspaces and practical automation, we help response teams get more work done quickly and accurately in fewer clicks.</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                <div className='w-[85px] h-[85px]'><Image className='w-full h-full object-cover' src={img2} alt="" /></div>
                    <h2 className="text-[24px] text-headingColor my-3 font-bold font-titleFont leading-[28px]">Trust the industry standard for leading companies </h2>
                    <p className="font-light font-titleFont text-gray-600">Top organizations like Adobe, Atlassian, Google, Microsoft, Tenable, Zoom and thousands of others rely on Responsive to transform their RFX response processes.</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                <div className='w-[85px] h-[85px]'><Image className='w-full h-full object-cover' src={img3} alt="" /></div>
                    <h2 className="text-[24px] text-headingColor my-3 font-bold font-titleFont leading-[28px]">Get access to the most extensive customer programs</h2>
                    <p className="font-light font-titleFont text-gray-600">From onboarding to consulting services and everything in between, we offer more ways to help your team improve their strategic response management approach.</p>
                </div>
            </div>
        </div>
    );
};

export default ThreeCards;