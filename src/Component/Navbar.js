// import { NavLink } from "react-router-dom";
import Logo from "../Images/jazzylogo.png"


const Navbar = () => {
    return (
        <div className="navbar w-full bg-black">
            <div className="navWrapper max-w-7xl px-10 flex py-3 items-center mx-auto justify-between">
                <a href="/"><img src= { Logo } alt="Jazzy Logo" className="h-14"/></a>        

                <div className="nav">
                    <div className="links mb-2 font-newFont">
                        <a href="/" className="navbar_link">Home</a>
                        <a href="/" className="navbar_link">Products</a>
                        <a href="/" className="navbar_link">About</a>
                        <a href="/" className="navbar_link">Contact</a>
                    </div>
                </div>
           </div>

        </div>
    );
}
 
export default Navbar;