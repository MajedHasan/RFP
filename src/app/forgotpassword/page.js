import Image from "next/image";
import Link from "next/link";
import logo from "../../Image/logo-p.svg";
import img from "../../Image/summit-app.jpg";

const Page = () => {
    return (
        <div>
            <div className="h-screen flex items-center justify-center container">
            <div className="flex items-center">
            
                <div className="md:w-1/2 px-8 md:px-16">
                 <div className="flex flex-col mb-5 justify-center items-center">
                    <Image src={logo} alt="" />
                    <p className="text-[20px] font-medium md:-mt-[5px] text-[#1C3442]">Forgot your password?</p>
                 </div>
               

                <form action="" className="flex flex-col gap-4">
                <div className="relative">
							<input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						
						<div className="flex flex-row justify-center items-center">
                            
							<button className="bg-primaryColor text-white text-sm rounded-md py-2 px-5 font-bold  uppercase ">send me the link</button>
						</div>
                </form>

                <div className="flex flex-row justify-center items-center mt-3">
                <Link href="/Login" className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                    Back to Login
                </Link>
                </div>
                </div>

                <div className="md:block hidden w-1/2">
                 <Image src={img} className="rounded-2xl"  alt="" />
                </div>
            </div>
         </div>
        </div>
    );
};

export default Page;