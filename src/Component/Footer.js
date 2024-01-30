import Logo from "../Images/logo.png";
import image1 from "../Images/android.png";
import image2 from "../Images/ios.png";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="w-full">
            <div className="max-w-7xl flex mx-auto px-20 my-10  justify-between">
                <div className="flex flex-col w-[300px] space-y-4">
                    <img src={Logo} alt="Logo" width={100} />
                    <p className="text-[#475467] text-[13px]">ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
                </div>

                <div className="flex space-x-20">
                    <div className="text-[14px] font-medium flex flex-col space-y-2">
                        <p className="text-[#667085] text-[12px]">Product</p>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Overview</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Features</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Solutions</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Tutorials</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Pricing</p></a>
                    </div>
                    <div className="text-[14px] font-medium flex flex-col space-y-2">
                        <p className="text-[#667085] text-[12px]">Company</p>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">About us</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Careers</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Press</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">News</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Contact</p></a>
                    </div>
                    <div className="text-[14px] font-medium flex flex-col space-y-2">
                        <p className="text-[#667085] text-[12px]">Resources</p>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Blog</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Events</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Help centre</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Tutorials</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Support</p></a>
                    </div>
                    <div className="text-[14px] font-medium flex flex-col space-y-2">
                        <p className="text-[#667085] text-[12px]">Legal</p>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Terms</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Privacy</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Cookies</p></a>
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Licenses</p></a> 
                        <a href="#"><p className="text-[#475467] hover:text-[#667085]">Contact</p></a>
                    </div>
                </div>

                <div className="flex flex-col space-y-2">
                    <p className="text-[#175CD3] text-[12px] font-semibold">Get the app</p>
                    <img src={image2} alt="IOS" width={90}/>
                    <img src={image1} alt="Android" width={90}/>
                </div>
            </div>

            <div className="max-w-7xl flex mx-auto px-20 mt-10 bg-[#F9FAFB] h-[70px] justify-between">
                <div className="flex items-center text-[#98A2B3] text-[12px]">
                    <p>© 2024 ClearLink. All rights reserved.</p>
                </div>
                <div className="text-[#98A2B3] text-[18px] flex items-center space-x-4">
                    <span><FaLinkedin /></span>
                    <span><FaTwitter /></span>
                    <span><FaFacebook /></span>
                    <span><FaInstagram /></span>
                    <span><FaGithub /></span>
                    <span><FaYoutube /></span>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;