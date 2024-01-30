import { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

import image1 from '../Images/screenmode.png';
import { FaRegCheckCircle } from "react-icons/fa";

const FAQ = () => {
    const [isOpened1, setIsOpened1] = useState(false)
    const [isOpened2, setIsOpened2] = useState(false)
    const [isOpened3, setIsOpened3] = useState(false)
    const [isOpened4, setIsOpened4] = useState(false)
    const [isOpened5, setIsOpened5] = useState(false)
    const [isOpened6, setIsOpened6] = useState(false)
    

    return (
        <div className="w-full">
            <div className="max-w-7xl flex justify-between mx-auto px-20 my-20  py-10">
                <div className="w-[420px]  space-y-3">
                    <div className="space-y-2">
                    <p className="text-[#175CD3] text-[12px] font-semibold">Support</p>
                    <h2 className="text-[#1D2939] text-[25px] font-bold">FAQs</h2>
                    </div>
                    <div>
                        <p className="text-[#667085] text-[16px]">Everything you need to know about the product <br />and billing. Can’t find the answer you’re looking <br />for? Please chat to our friendly team.</p>
                        <div className="block w-[185px] h-[1.5px] bg-[#667085] ml-[90px] -mt-1"></div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className={isOpened1 ? `border w-[600px] p-4 bg-[#F9FAFB] rounded-lg border-[#EAECF0] space-y-3` : ` border-b-[1px] w-[600px] px-4 py-8  border-[#EAECF0] h-[50px]`}>
                        <div className="flex items-center justify-between">
                            <p className="text-[#101828] text-[15px] font-semibold">How many participants can join a ClearLink video conference?</p>
                            <span onClick={() => setIsOpened1(!isOpened1)}>{isOpened1 ? <FiMinusCircle /> : <FiPlusCircle />}</span>
                        </div>
                        
                        {isOpened1 && 
                            <p className="text-[#475467] text-[15px]">
                                ClearLink offers flexible meeting options. Depending on your subscription <br /> plan, you can host meetings with varying numbers of participants. 
                                Our plans <br />are designed to accommodate small team collaborations and large-scale <br /> webinars, ensuring you have the right fit for your needs.
                            </p>
                        }
                    </div>
                    <div className={isOpened2 ? `border w-[600px] p-4 bg-[#F9FAFB] rounded-lg border-[#EAECF0] space-y-3` : ` border-b-[1px] w-[600px] px-4 py-8  border-[#EAECF0] h-[50px]`}>
                        <div className="flex items-center justify-between">
                            <p className="text-[#101828] text-[15px] font-semibold">Can I use ClearLink on multiple devices?</p>
                            <span onClick={() => setIsOpened2(!isOpened2)}>{isOpened2 ? <FiMinusCircle /> : <FiPlusCircle />}</span>
                        </div>
                        
                        {isOpened2 && 
                            <p className="text-[#475467] text-[15px]">
                                ClearLink offers flexible meeting options. Depending on your subscription <br /> plan, you can host meetings with varying numbers of participants. 
                                Our plans <br />are designed to accommodate small team collaborations and large-scale <br /> webinars, ensuring you have the right fit for your needs.
                            </p>
                        }
                    </div>
                    <div className={isOpened3 ? `border w-[600px] p-4 bg-[#F9FAFB] rounded-lg border-[#EAECF0] space-y-3` : ` border-b-[1px] w-[600px] px-4 py-8  border-[#EAECF0] h-[50px]`}>
                        <div className="flex items-center justify-between">
                            <p className="text-[#101828] text-[15px] font-semibold">Is ClearLink compatible with other video conferencing platforms?</p>
                            <span onClick={() => setIsOpened3(!isOpened3)}>{isOpened3 ? <FiMinusCircle /> : <FiPlusCircle />}</span>
                        </div>
                        
                        {isOpened3 && 
                            <p className="text-[#475467] text-[15px]">
                                ClearLink offers flexible meeting options. Depending on your subscription <br /> plan, you can host meetings with varying numbers of participants. 
                                Our plans <br />are designed to accommodate small team collaborations and large-scale <br /> webinars, ensuring you have the right fit for your needs.
                            </p>
                        }
                    </div>
                    <div className={isOpened4 ? `border w-[600px] p-4 bg-[#F9FAFB] rounded-lg border-[#EAECF0] space-y-3` : ` border-b-[1px] w-[600px] px-4 py-8  border-[#EAECF0] h-[50px]`}>
                        <div className="flex items-center justify-between">
                            <p className="text-[#101828] text-[15px] font-semibold">How does ClearLink ensure the security of my video conferences?</p>
                            <span onClick={() => setIsOpened4(!isOpened4)}>{isOpened4 ? <FiMinusCircle /> : <FiPlusCircle />}</span>
                        </div>
                        
                        {isOpened4 && 
                            <p className="text-[#475467] text-[15px]">
                                ClearLink offers flexible meeting options. Depending on your subscription <br /> plan, you can host meetings with varying numbers of participants. 
                                Our plans <br />are designed to accommodate small team collaborations and large-scale <br /> webinars, ensuring you have the right fit for your needs.
                            </p>
                        }
                    </div>
                    <div className={isOpened5 ? `border w-[600px] p-4 bg-[#F9FAFB] rounded-lg border-[#EAECF0] space-y-3` : ` border-b-[1px] w-[600px] px-4 py-8  border-[#EAECF0] h-[50px]`}>
                        <div className="flex items-center justify-between">
                            <p className="text-[#101828] text-[15px] font-semibold">Do I need to download any software to use ClearLink?</p>
                            <span onClick={() => setIsOpened5(!isOpened5)}>{isOpened5 ? <FiMinusCircle /> : <FiPlusCircle />}</span>
                        </div>
                        
                        {isOpened5 && 
                            <p className="text-[#475467] text-[15px]">
                                ClearLink offers flexible meeting options. Depending on your subscription <br /> plan, you can host meetings with varying numbers of participants. 
                                Our plans <br />are designed to accommodate small team collaborations and large-scale <br /> webinars, ensuring you have the right fit for your needs.
                            </p>
                        }
                    </div>
                    <div className={isOpened6 ? `border w-[600px] p-4 bg-[#F9FAFB] rounded-lg border-[#EAECF0] space-y-3` : ` border-b-[1px] w-[600px] px-4 py-8  border-[#EAECF0] h-[50px]`}>
                        <div className="flex items-center justify-between">
                            <p className="text-[#101828] text-[15px] font-semibold">What kind of customer support does ClearLink provide?</p>
                            <span onClick={() => setIsOpened6(!isOpened6)}>{isOpened6 ? <FiMinusCircle /> : <FiPlusCircle />}</span>
                        </div>
                        
                        {isOpened6 && 
                            <p className="text-[#475467] text-[15px]">
                                ClearLink offers flexible meeting options. Depending on your subscription <br /> plan, you can host meetings with varying numbers of participants. 
                                Our plans <br />are designed to accommodate small team collaborations and large-scale <br /> webinars, ensuring you have the right fit for your needs.
                            </p>
                        }
                    </div>
                </div>

            </div>


            <div className="max-w-7xl flex justify-between mx-auto pl-20 my-20 py-10 ">

                <div className="w-[420px] mt-10 space-y-5">
                    <h1 className="text-[32px] font-bold leading-tight text-[#101828]">Ready to clear the path to perfect communication?</h1>
                    <div className="space-y-2">
                        <div className="flex items-center text-[16px]">
                            <span className="text-[#175CD3]"><FaRegCheckCircle /></span>
                            <p className="text-[#475467]">30 days free trial</p>
                        </div>
                        <div className="flex items-center text-[16px]">
                            <span className="text-[#175CD3]"><FaRegCheckCircle /></span>
                            <p className="text-[#475467]">Cancel at any time</p>
                        </div>
                        <div className="flex items-center text-[16px]">
                            <span className="text-[#175CD3]"><FaRegCheckCircle /></span>
                            <p className="text-[#475467]">Access to all features</p>
                        </div>
                        <div className="flex items-center text-[16px]">
                            <span className="text-[#175CD3]"><FaRegCheckCircle /></span>
                            <p className="text-[#475467]">Peronalized onboarding</p>
                        </div>
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
                <div className="w-[600px]">
                    <img src={image1} alt="Screen Mode" />
                </div>
            </div>
        </div>
    );
}
 
export default FAQ;