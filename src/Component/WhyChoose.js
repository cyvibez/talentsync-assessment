import { LuVideo } from "react-icons/lu";

import image1 from '../../src/Images/whyChooseImg.png';
import arrow from '../../src/Images/arrow.png';
import image2 from '../../src/Images/Contents.png';
import shopify from '.././Images/Shopify.com.png';
import stars from '../Images/Stars.svg';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import avatar from '../Images/shopifyAvatar.png'


const WhyChoose = () => {
    return (
        <div className="w-full">
            <div className="max-w-7xl flex flex-col mx-auto px-20 my-20 relative">

                <div className="my-10">
                    <p className="text-[#175CD3] text-[12px] font-black">The ClearLink Advantage</p>
                    <h1 className="text-[#1D2939] font-black text-[30px] my-2">Why choose ClearLink?</h1>
                    <p className="text-[#667085] text-[16px]">In a world where connection is everything, ClearLink takes the lead. Our <br />
                    cutting-edge video conferencing app offers:</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col max-w-[600px] space-y-10">
                        <div className="flex space-x-10">
                            <div className="w-[600px] flex flex-col" >
                                <div className=" bg-[#F9FAFB] rounded-[50%] border-[#EAECF0] w-[40px] h-[40px] flex justify-center items-center"> 
                                    <span className="text-[#175CD3] "><LuVideo /></span>
                                </div>
                                <h4 className="my-2 text-[#101828] text-[16px] font-bold">Crystal-clear HD video</h4>
                                <p className="text-[#475467] text-[14px]">No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.</p>
                            </div>
                            <div className="w-[600px] flex flex-col" >
                                <div className=" bg-[#F9FAFB] border rounded-[50%] border-[#EAECF0] w-[40px] h-[40px] flex justify-center items-center"> 
                                    <span className="text-[#175CD3] "><LuVideo /></span>
                                </div>
                                <h4 className="my-2 text-[#101828] text-[16px] font-bold">Noise-canceling audio</h4>
                                <p className="text-[#475467] text-[14px]">Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.</p>
                            </div>
                        </div>
                        <div className="flex space-x-10">
                            <div className="w-[600px] flex flex-col" >
                                <div className=" bg-[#F9FAFB] border rounded-[50%] border-[#EAECF0] w-[40px] h-[40px] flex justify-center items-center"> 
                                    <span className="text-[#175CD3] "><LuVideo /></span>
                                </div>
                                <h4 className="my-2 text-[#101828] text-[16px] font-bold">Scheduling made easy</h4>
                                <p  className="text-[#475467] text-[14px]">Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.</p>
                            </div>
                            <div className="w-[600px] flex flex-col" >
                                <div className=" bg-[#F9FAFB] border rounded-[50%] border-[#EAECF0] w-[40px] h-[40px] flex justify-center items-center"> 
                                    <span className="text-[#175CD3] "><LuVideo /></span>
                                </div>
                                <h4 className="my-2 text-[#101828] text-[16px] font-bold">Bank-grade security</h4>
                                <p  className="text-[#475467] text-[14px]"> Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img src={image1} alt="people" width={400}/>
                    </div>
                </div>

                <div className="absolute right-[230px] top-[70px]"> 
                    <img src={arrow} alt="arrow" width={180} />
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-20 my-20 border">
                <di className='flex justify-between items-center border my-20'>
                    <div className="w-[480px] border mx-5 space-y-6 ">
                        <img src={shopify} alt="shopify logo" width={100}/>
                        <img src={stars} alt="star sign" width={70}/>
                        <h3 className="text-[#101828] text-[30px] font-medium">ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.</h3>
                        <div className="flex items-center space-x-[150px]">
                            <div className="flex items-center space-x-2">
                                <img src={avatar} alt="Shopify Avatar" width={45} height={40}/>
                                <div className="flex flex-col justify-center ">
                                    <p className="text-[#101828] text-[12px] font-bold">Sarah Thompson</p>
                                    <p className="text-[#475467] text-[12px]">Project Manager, Shopify</p>
                                </div> 
                            </div>
                            <div className="flex space-x-3">
                                <div className="bg-white border border-[#D1E9FF] rounded-[50%] p-2 ">
                                    <span className="text-[#175CD3] text-[10px]"><FaArrowLeftLong /></span>
                                </div>
                                <div className="bg-white border border-[#D1E9FF] rounded-[50%] p-2 ">
                                    <span className="text-[#175CD3] text-[10px]"><FaArrowRightLong /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image2} alt="Content" width={550} />
                    </div>
                </di>
            </div>

        </div>
    );
}
 
export default WhyChoose; 