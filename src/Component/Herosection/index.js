import { RiRobot2Line } from "react-icons/ri";
import { TiMicrophoneOutline } from "react-icons/ti";
import { LuVideo } from "react-icons/lu";
import { FiMonitor } from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { PiGearBold } from "react-icons/pi";

import Navbar from "../Navbar";
import styles from './style.module.css'
import avatar from '../../Images/Avatar.png';
import stars from '../../Images/Stars.svg';
import image1 from '../../Images/animoji-0.png';
import image2 from '../../Images/animoji-1.png';
import image3 from '../../Images/animoji-2.png';
import image4 from '../../Images/animoji-3.png';
import image5 from '../../Images/animoji-4.png';
import image6 from '../../Images/animoji-5.png';


const Herosection = () => {
    
    return (
        <div className="w-full">
            <div className={`max-w-7xl flex flex-col mx-auto ${styles.background} h-[100vh]`}>
               <div className="sticky">
                <Navbar />
               </div>

               <div className="mx-20 mt-[112px] flex justify-between ">
                    <div className="flex flex-col justify-between w-[600px] ">
                       <h1 className="text-[40px] font-extrabold leading-tight">Uniting the world, <br /> one video call at a time</h1>
                       <p className="text-[#667085] leading-normal text-[16px] font-bold">Experience the future of communication with ClearLink –  <br /> where crystal-clear video conferencing meets <br /> unparalleled simplicity.</p>

                       <div className="flex space-x-3 text-[14px]">
                        <button className="border bg-[#175CD3] rounded-3xl py-2 px-4 text-white  shadow-md hover:bg-[#172ad3db]">
                            Start free trial
                        </button>
                        <p className="flex text-[#175CD3] items-center font-bold">
                            <span className="mr-2"><RiRobot2Line/></span>
                            Discover AI Assitant
                        </p>
                       </div>

                       <div className="flex space-x-3">
                        <img src={avatar} alt="profile" width={150}/>
                        <div className="text-[13px]  font-bold" >
                            <div className="flex  items-center space-x-1">
                                <img src={stars} alt="stars rating" width={100}/>
                                <p className="text-[#344054]">5.0</p>
                            </div>
                            <p className="text-[#475467]">from 3,000+ reviews</p>
                        </div>
                       </div>
                    </div>

                    <div className="bg-[#EFF8FF]  w-[600px] h-[420px] border border-[#B2DDFF] rounded-2xl flex flex-col justify-between items-center p-4 shadow-2xl">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex item-center justify-center space-x-4">
                                <img src={image1} alt="AI" />
                                <img src={image2} alt="AI" />
                                <img src={image3} alt="AI" />
                            </div>
                            <div className="flex item-center justify-center  space-x-4">
                                <img src={image4} alt="AI" />
                                <img src={image5} alt="AI" />
                                <img src={image6} alt="AI" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center space-x-3">
                            <div className=" bg-white border rounded-[50%] border-[#D1E9FF] p-2">
                                <span className="text-[#175CD3]"><TiMicrophoneOutline /></span>
                            </div>
                            <div className=" bg-white border rounded-[50%] border-[#D1E9FF] p-2">
                                <span className="text-[#175CD3]"><LuVideo /></span>
                            </div>
                            <div className=" bg-white border rounded-[50%] border-[#D1E9FF] p-2">
                                <span className="text-[#175CD3]"><FiMonitor /></span>
                            </div>
                            <div className=" bg-white border rounded-[50%] border-[#D1E9FF] p-2">
                                <span className="text-[#175CD3]"><FaRegSmile /></span>
                            </div>
                            <div className=" bg-white border rounded-[50%] border-[#D1E9FF] p-2">
                                <span className="text-[#175CD3]"><FaRegCommentDots /></span>
                            </div>
                            <div className=" bg-white border rounded-[50%] border-[#D1E9FF] p-2">
                                <span className="text-[#175CD3]"><PiGearBold /></span>
                            </div>

                        </div>
                    </div>
               </div>
            </div>

        </div>
    );
}
 
export default Herosection;