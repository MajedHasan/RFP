import { FaArrowRight } from "react-icons/fa";

const Link = ({Link}) => {
  return (
    <div>
      <div className="mt-[10px] tabs-text-color relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#00699b] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
        <a className="text-[16px] font-bold flex flex-row gap-2 items-center hover:justify-center hover:items-center  hover:gap-4 transition duration-700 ease-in-out" href="#">
          {Link}
          <FaArrowRight className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default Link;
