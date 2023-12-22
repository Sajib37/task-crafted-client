import login from "../../assets/images/register.jpg"
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import ScoialLogin from "../../Shared/ScoialLogin/ScoialLogin";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/AxiosPublic/AxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {

    const { createUser, logOut, profileUpdate } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    
    const onSubmit = async (data) => {

        const imageFile = { image: data.photo[0] };

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });



        // console.log(res.data.data.display_url);

        if (res.data.success) {
            if (data.password.length < 6) {
                toast.error("password must be at least six character");
                return;
            }
            else if (data.password !== data.confirmPassword) {
                toast.error("Password did not match.!")
            }
            else if (!/[A-Z]/.test(data.password)) {
                toast.error("password must be contain Upper Case");
                return;
            } else if (!/[a-z]/.test(data.password)) {
                toast.error("password must be contain Lower Case");
                return;
            } else if (!/\d/.test(data.password)) {
                toast.error("password must be contain a number");
                return;
            } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(data.password)) {
                toast.error("password must be contain a special Character");
                return;
            } else {
                createUser(data.email, data.password)
                    .then((result) => {
                        profileUpdate(data.name, res.data.data.display_url)
                            .then((result) => {
                                const newUser = {
                                    name: data.name,
                                    photo: res.data.data.display_url,
                                    email: data.email,
                                    password: data.password, role: 'common',
                                    role: 'user',
                                    member: 'normal'
                                }
                                axiosPublic.post('/users', newUser)
                                    .then( async res => {
                                        toast.success("Account created successfully");
                                        reset();
                                        await new Promise((resolve) => setTimeout(resolve, 1000));
                                        // logOut()
                                        //     .then(res => {
                                        //     console.log(res)
                                        //     })
                                        //     .catch(err => {
                                        //     console.log(err)
                                        // })
                                        navigate("/login");
                                    })
                                    .catch(error => console.log(error))                               
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    })
                    .catch((error) => {
                        if (
                            error ==
                            `FirebaseError: Firebase: Error (auth/email-already-in-use).`
                        ) {
                            toast.error("Your Email already in use.");
                        } else {
                            // toast.error("Account created Failed!");
                            console.log(error)
                        }
                    });
            }
        }
    };


    return (
        <section className="max-w-screen-xl mx-auto flex md:flex-col-reverse lg:flex-row justify-around items-center py-12 px-2">
            <ToastContainer></ToastContainer>
            <div className=" w-1/2 hidden md:block">
                <img className="w-full" src={login} alt="" />
            </div>
            
            <div className="bg-gray-100 py-8 px-1 md:px-4 lg:px-8 rounded-lg w-full h-fit md:w-4/5 lg:w-1/2">
                <h1 className="text-center text-2xl mb-4 lg:text-4xl font-semibold">Create a new Accout!</h1>
                <form action=""  onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="">Name: </label>
                        <input {...register('name')} type="text" placeholder="Enter your name" required className="input input-bordered w-full" />
                    </div>
                    <div>
                        <label htmlFor="">Photo: </label>
                        <input {...register('photo')} type="file" className="file-input file-input-bordered w-full " required />
                    </div>
                    <div>
                        <label htmlFor="">Email: </label>
                        <input {...register('email')} type="email" placeholder="Enter your email" required className="input input-bordered w-full" />
                    </div>
                    <div>
                        <label htmlFor="">Password: </label>
                        <input {...register('password')} type="password" placeholder="Enter your password" required className="input input-bordered w-full" />
                    </div>
                    <div>
                        <label htmlFor="">Confirm Password: </label>
                        <input {...register('confirmPassword')} type="password" placeholder="Repeat your password" required className="input input-bordered w-full" />
                    </div>

                    <button name='submit' className={`w-full font-semibold  py-2 rounded-lg bg-bg3 text-white mt-4`}>Register</button>
                </form>

                <p className=" font-medium text-black mt-4">Already have an account? Please, <Link className="text-color2" to='/login'>Login</Link></p>
                    
                <p className="text-center mt-2  text-black font-semibold">Or sign up with </p>
                <ScoialLogin></ScoialLogin>
            </div>

        </section>
    );
};

export default Register;