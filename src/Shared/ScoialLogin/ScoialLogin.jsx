import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ScoialLogin = () => {
    const { googleLogin } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => toast.success("Login SuccessFully.!"))
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