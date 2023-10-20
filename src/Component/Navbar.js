// import { NavLink } from "react-router-dom";
import Logo from "../Images/jazzylogo.svg"


const Navbar = () => {
    return (
        <div className="navbar w-full">
            <div className="navWrapper max-w-6xl flex px-4 py-4 items-center mx-auto">
                <a href="/"><img src= { Logo } alt="Jazzy Logo" className="h-20 mr-5"/></a>        

                <div className="nav py-5 w-full">
                    <div className="links ml-auto text-center mb-2 font-newFont">
                        <a href="/" className="navbar_link">Home</a>
                        <a href="/" className="navbar_link">Products</a>
                        <a href="/" className="navbar_link">About</a>
                        <a href="/" className="navbar_link">Contact</a>
               
                    </div>
                    
                    <div className="line h-1 w-full rounded-sm bg-red-400"></div>
                </div>

           </div>
        </div>
    );
}
 
export default Navbar;