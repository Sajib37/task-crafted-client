import { NavLink } from "react-router-dom";

const Navlinks = () => {
    return (
        <>
            <NavLink to="/" className={({ isActive, isPending }) =>isPending ? "text-color2" : isActive ? "text-color2 underline underline-offset-4" : ""}>
                Home
            </NavLink>
            <NavLink to="/login" className={({ isActive, isPending }) =>isPending ? "text-color2" : isActive ? "text-color2 underline underline-offset-4" : ""}>
                Login
            </NavLink>
            <NavLink to="/feature" className={({ isActive, isPending }) =>isPending ? "text-color2" : isActive ? "text-color2 underline underline-offset-4" : ""}>
                Features
            </NavLink>
        </>
    );
};

export default Navlinks;
