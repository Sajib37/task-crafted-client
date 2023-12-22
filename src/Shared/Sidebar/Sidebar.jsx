import Navlinks from "../Navlinks/Navlinks";

const Sidebar = ({handleOpen }) => {
    return (
        <section
            onClick={handleOpen}
            className={`w-64 bg-bg1 border-r-4 border-black min-h-screen`}
        >
            
            <ul className="text-lg text-center flex flex-col py-14 space-y-2 text-white">
                <h1 className="text-white mb-8 text-color1 font-bold text-2xl">Task Crafted</h1>
                <Navlinks></Navlinks>
            </ul>
        </section>
    );
};

export default Sidebar;