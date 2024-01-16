import Image from "next/image";
import img from "../../Image/responsive-rfx-platform-new.webp";
import Link from "../common/Link";
import Title from "../common/Title";


const WhyCustomers = () => {
    return (
        <div className="container mt-14">
            <Title h2="Why customers choose Responsive" />
            <div className="flex md:flex-row flex-col items-center gap-8">
                <div className="md:w-1/2 w-full">
                    <Title subtitle="Go beyond RFP software with the most powerful RFX platform" />
                    <p className="font-light font-titleFont text-[18px] my-7">It’s more important than ever to respond to all types of information requests quickly, accurately and skillfully. Your success and reputation depend on it. Responsive delivers everything you need without limits — leading the way in platform capability, flexibility and scalability.</p>
                    <span><Link Link="Learn more about our platform " /></span>
                </div>
                <div className="md:w-1/2 w-full">
                    <div>
                        <Image className="object-cover w-full h-full" src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyCustomers;