import { NavLink } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Navlinks = () => {
    const { user, logOut } = useAuth();
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(res => {
            toast.success("Logout Successfully.!")
            })
            .catch(err => {
            toast.error("Logout Failed .!")
        })
    }
    return (
        <>
            <ToastContainer></ToastContainer>
            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "text-color2" : isActive ? "text-color2 underline underline-offset-4" : ""}>
                Home
            </NavLink>
            {
                user &&
                <NavLink to="dashboard" className={({ isActive, isPending }) => isPending ? "text-color2" : isActive ? "text-color2 underline underline-offset-4" : ""}>
                    Dashboard
                </NavLink>
            }
            <NavLink to="/feature" className={({ isActive, isPending }) =>isPending ? "text-color2" : isActive ? "text-color2 underline underline-offset-4" : ""}>
                Features
            </NavLink>
            {
                user ?
                    <button onClick={handleLogOut} className="">Log Out</button> :
                    <NavLink to="/login" className={({ isActive, isPending }) =>isPending ? "text-color2" : isActive ? "text-color2 underline underline-offset-4" : ""}>
                        Login
                    </NavLink>
            }
        </>
    );
};

export default Navlinks;
