import FAQ from "../Component/Faq";
import Footer from "../Component/Footer";
import Herosection from "../Component/Herosection";
import Partners from "../Component/Partners";
import WhyChoose from "../Component/WhyChoose";

const Home = () => {
    return (
        <div>
            <Herosection />
            <Partners />
            <WhyChoose />
            <FAQ />
            <Footer />
        </div>
    );
}
 
export default Home;