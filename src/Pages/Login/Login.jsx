import { data } from "autoprefixer";
import login from "../../assets/images/login.jpg"
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import ScoialLogin from "../../Shared/ScoialLogin/ScoialLogin";

const Login = () => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <section className="max-w-screen-xl mx-auto flex md:flex-col-reverse gap-8 lg:flex-row justify-around items-center py-12 px-2">
            <div className="w-1/2 hidden md:block">
                <img className="w-full" src={login} alt="" />
            </div>
            
            <div className="bg-gray-100 py-8 px-1 md:px-4 rounded-lg w-full h-fit md:w-4/5 lg:w-1/2">
                <h1 className="text-center text-2xl mb-4 lg:text-4xl font-semibold">Login to your Accout!</h1>
                <form action=""  onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="">Email: </label>
                        <input {...register('email')} type="email" placeholder="Enter your email" required className="input input-bordered w-full" />
                    </div>
                    <div>
                        <label htmlFor="">Password: </label>
                        <input {...register('password')} type="password" placeholder="Enter your password" required className="input input-bordered w-full" />
                    </div>

                    <button name='submit' className={`w-full font-semibold  py-2 rounded-lg bg-bg3 text-white mt-4`}>Login</button>
                </form>

                <p className=" font-medium text-black mt-4">Don't have an account? Please, <Link className="text-color2" to='/register'>Register</Link></p>
                    
                <p className="text-center mt-2  text-black font-semibold">Or sign up with </p>
                <ScoialLogin></ScoialLogin>
            </div>

        </section>
    );
};

export default Login;