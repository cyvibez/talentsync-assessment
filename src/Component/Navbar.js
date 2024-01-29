import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import Logo from "../Images/logo.png";
import { useState } from "react";


const Navbar = () => {

    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)


    return (
        <div className="w-full mt-6">
            <div className="bg-[#F2F4F7] max-w-6xl px-10 flex py-3 items-center mx-auto justify-between rounded-[30px] border border-[#D0D5DD]">
                <a href="/"><img src= { Logo } alt="Clearlink logo" className="h-5"/></a>        

                <div className=" flex text-[#667085] text-[13px]">
                    <p className="flex items-center cursor-pointer font-semibold p-2 mx-4 hover:text-[#333841] "
                        onClick={() => setIsOpen1(!isOpen1)}
                    >
                        Products 
                        <span className="ml-1">{isOpen1 ? <IoIosArrowUp/> : <IoIosArrowDown/> }</span>
                    </p>
                    <p className="flex items-center cursor-pointer font-semibold p-2 mx-2 hover:text-[#333841]"
                        onClick={() => setIsOpen2(!isOpen2)}
                    >
                        Solutions 
                        <span className="ml-1">{isOpen2 ? <IoIosArrowUp/> : <IoIosArrowDown/> }</span>
                    </p>
                    <p className="flex items-center cursor-pointer font-semibold p-2 mx-2 hover:text-[#333841]"
                        onClick={() => setIsOpen3(!isOpen3)}
                    >
                        Resources 
                        <span className="ml-1">{isOpen3 ? <IoIosArrowUp/> : <IoIosArrowDown/> }</span>
                    </p>   
                    <a href="/" className="flex items-center font-semibold p-2 mx-2 hover:text-[#333841]">
                        Pricing 
                    </a>
                </div>
              

                <div className="text-[13px] font-semibold space-x-2">
                    <button className="border border-[#667085] bg-white rounded-3xl py-2 px-4 shadow-md  hover:bg-[#667085] hover:text-white">
                        Talk to Sales
                    </button>

                    <button className="border border-[#175CD3] bg-[#175CD3] rounded-3xl py-2 px-4 text-white  shadow-md hover:bg-white hover:text-[#175CD3]">
                        Signup for free
                    </button>
                </div>

           </div>

        </div>
    );
}
 
export default Navbar;