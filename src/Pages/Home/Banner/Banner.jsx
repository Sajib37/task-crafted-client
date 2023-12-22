import { Link } from "react-router-dom";
import banner from "../../../assets/images/banner.jpg"
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
    return (
        <section className="lg:h-[90vh] md:h-[60vh] h-[40vh] relative">
            <img className="h-full w-full" src={banner} alt="" />
            <div className="absolute top-0 left-0 bg-black h-full w-full opacity-30"></div>
            <div className="absolute z-10 flex justify-center items-center flex-col gap-4 top-0 left-0 h-full w-full">
                <div className="text-center text-white md:space-y-2">
                    <h1 className="lg:text-5xl text-2xl md:text-4xl font-bold ">Welcome to Task Crafted</h1>
                    <p className="text-base text-white font-medium">Your Ultimate Task Management Solution!</p>
                </div>
                <Link className="bg-[#711DB0] p-2 px-4 md:text-xl lg:text-2xl font-medium rounded-full flex gap-2 text-white items-center border-2 border-[#711DB0] hover:bg-bg3 hover:text-color1" to="/login">Let's Explore <FaArrowRight /></Link>
            </div>
        </section>
    );
};

export default Banner;