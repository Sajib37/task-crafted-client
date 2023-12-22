import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPublic from "../../Hooks/AxiosPublic/AxiosPublic";
import { useNavigate } from "react-router-dom";


const ScoialLogin = () => {
    const { googleLogin } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                // console.log(result.user)
                const newUser = {
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                    email: result.user?.email,
                    password: 'Login with Google',
                }

                axiosPublic.post('/users', newUser)
                    .then(async res => {
                        await new Promise((resolve) => setTimeout(resolve, 1000));
                        // console.log(location.state)
                        // navigate(location?.state ? location.state : '/');
                        toast.success('Login Successfully !')
                    })
                    .catch(error => {
                        toast.error('Login Failed.!')
                        console.log(error)
                })
            })
            .catch(err => console.log(err))
        
    }
    return (
        <section className="mt-2">
            <ToastContainer></ToastContainer>
            <button onClick={handleGoogleLogin} className="w-full text-center text-lg gap-3 font-semibold text-white py-1 rounded-lg bg-green-600 flex items-center justify-center"><FaGoogle className="text-xl" /> Sign Up with Google</button>
        </section>
    );
};

export default ScoialLogin;