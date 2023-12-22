import { Link } from "react-router-dom";
import banner from "../../../assets/images/banner.jpg"
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
    return (
        <section className="lg:h-[90vh] md:h-[60vh] h-[40vh] relative">
            <img className="h-full w-full" src={banner} alt="" />
            <div className="absolute top-0 left-0 bg-black h-full w-full opacity-30"></div>
            <div className="absolute z-20 flex justify-center items-center flex-col gap-4 top-0 left-0 h-full w-full">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-semibold ">Welcome to Task Crafted</h1>
                    <p className="text-xl text-color2 font-medium">Your Ultimate Task Management Solution!</p>
                </div>
                <Link className="bg-[#711DB0] p-2 px-4 text-2xl font-medium rounded-full flex gap-2 text-white items-center border-2 border-[#711DB0] hover:bg-white hover:text-color1" to="/login">Let's Explore <FaArrowRight /></Link>
            </div>
        </section>
    );
};

export default Banner;