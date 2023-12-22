import Navlinks from "../Navlinks/Navlinks";

const Navbar = () => {
    return (
        <section className='bg-bg1'>
            <section className='max-w-screen-xl md:flex mx-auto items-center justify-between px-4 '>
                <h1 className=" font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#711DB0] to-[#C21292]">Task Crafted</h1>
                <ul className='text-white font-medium h-16 flex justify-end gap-10 lg:gap-16 items-center'>
                    <Navlinks></Navlinks>
                </ul>
            </section>
        </section>
    );
};

export default Navbar;