import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../../Hooks/AxiosPublic/AxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

import { RiMenu2Fill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";

const Aside = () => {
    const { logOut, user,loading } = useAuth()
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate()
    const [open, setOpen] = useState(window.innerWidth >= 1024);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast.success('Log Out Successfull')
                navigate('/')
                
            })
            .catch(error => {
            toast.error('Log Out Failed !!')
        })
    }

    const handleOpen = () => {
        if (window.innerWidth < 1024) {
            setOpen(!open);
        }
    };
    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 1024);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const { data: profile, isLoading: loadProfiles , refetch } = useQuery({
        queryKey: ['profile', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosPublic.get(`/users/${user.email}`);
                // console.log(res.data)
                return res.data;
            }
        },
    });


    // console.log(profile)

    return (
        <section>
            <ToastContainer></ToastContainer>
            
            <button onClick={handleOpen} className="text-3xl z-30 lg:hidden text-color2 fixed top-2 left-2">
                <RiMenu2Fill />
            </button>

            <aside  onClick={handleOpen} className={`w-72 fixed top-0 z-20 left-0   bg-bg1 border-r-4  border-black text-white pt-4 h-screen transition-transform duration-700 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`} style={{ overflowY: 'auto' }}>
                
                
                
                <div className="pt-10 flex flex-col justify-center items-center gap-2">
                    
                    {
                        profile &&
                        <div>
                                <img className="w-16 h-16 mb-2 rounded-full mx-auto" src={profile.photo} alt="" />
                                <div className="text-center">
                                    <h1 className="font-bold">{profile.name}</h1>
                                    <h1 className="text-sm text-gray-500">{ profile.email}</h1>
                                </div>
                        </div>
                    }
                    <div className="bg-gray-300 h-[1px] w-[80%] my-4"></div>
                    <NavLink to="createtask" className={({ isActive, isPending }) => isPending ? "text-color2" : isActive ? "text-color2 underline underline-offset-4" : ""}>
                        Create New Task
                    </NavLink>

                    <NavLink to="" className={({ isActive, isPending }) => isPending ? "text-color1" : isActive ? "text-color1 " : ""}>
                        Previous Tasks
                    </NavLink>

                    <NavLink to="todos" className={({ isActive, isPending }) => isPending ? "text-color2" : isActive ? "text-color2 underline underline-offset-4" : ""}>
                        To Do's
                    </NavLink>

                    <div className="bg-gray-600 h-[1px] w-[80%] my-2"></div>
                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "text-color2" : isActive ? "text-color2 underline underline-offset-4" : ""}>
                        Home
                    </NavLink>

                    <button onClick={handleLogOut} className="flex items-center gap-2 hover:text-color2">Log Out <MdLogout /></button>
                </div>
            </aside>
        </section>
    );
};

export default Aside;