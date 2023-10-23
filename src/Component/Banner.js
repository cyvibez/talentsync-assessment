// import Burger from "../Images/jazzybanner.png";
import Background from "../Images/banner.png";

const Banner = () => {
    return (
        <div className="banner w-full">
            <div className="banner-img max-w-7xl mx-auto relative">
                <img src={ Background } alt="Burger" className="w-full" />

                <div className="banner2 font-secondFont absolute top-2 text-white">
                    <div className="banner_text">
                        <p>Jazzy Burger</p>
                        <h5>The <i>Jazz</i> is in every bite</h5>
                    </div>
                    <button>Order Now</button>
                </div>
          
            </div>
        </div>
    );
}
 
export default Banner;