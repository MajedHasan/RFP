import Image from "next/image";
import img from "../../Image/Responsive_G2_2023_Update.webp";
import Button from "../common/Button/Button";

const EConInnerSection = () => {
  return (
    <div className="container">
      <div className="flex md:flex-row flex-col items-center my-28 gap-4">
        <div className="w-full md:w-1/2">
          <h2 className="font-extrabold text-[42px] text-headingColor leading-[52px]">
            No. 1 in RFP Software and more on G2
          </h2>
          <div>
            <p className="font-light font-titleFont text-[18px] mt-4">
              Based on hundreds of user reviews, G2 has recognized Responsive
              (formerly RFPIO) as the continual RFP Software leader — four years
              and counting.
            </p>
            <p className="font-light font-titleFont text-[18px] mt-6">
              We’re also leaders in Proposal, Vendor Security & Privacy
              Assessment and Document Generation software categories.
            </p>
          </div>
          <div className="mt-4">
            <Button button="REQUEST DEMO" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div>
            <Image src={img} alt="Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EConInnerSection;
