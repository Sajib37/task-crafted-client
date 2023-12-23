import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import useAxiosPublic from '../../Hooks/AxiosPublic/AxiosPublic';
import { useAuth } from '../../AuthProvider/AuthProvider';

const ModalForm = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const { user } = useAuth();

    const axiosPublic = useAxiosPublic()

    const onSubmit = (data) => {
        const newTask = {
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            priority: data.priority,
            status: data.status,
            email: user?.email
        }

        // console.log(newTask)

        axiosPublic.post("/tasks", newTask)
            .then(res => {
                console.log(res)
                toast.success("New task added successfully.")
                reset();
            })
            .catch(err => console.log(err))
        
        
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            
            <div className='mt-3'>
                <label className='font-semibold' htmlFor="">Title: </label>
                <input {...register('title')} type="text" placeholder="Enter task title" required className="input input-bordered w-full" />
            </div>
            <div className='mt-3'>
                <label className='font-semibold' htmlFor="">Description: </label>
                {/* <input {...register('description')} type="textArea" placeholder="Enter task description " required className="input input-bordered w-full" /> */}
                <textarea {...register('description')} className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
            </div>
            <div className='mt-0'>
                <label className='font-semibold' htmlFor="">Deadline: </label>
                <input {...register('deadline')} type="date" placeholder="Enter task deadline " required className="input input-bordered w-full" />
            </div>

            <div className='flex gap-2 mt-3'>

                <select {...register('priority')} required className="input input-bordered w-full">
                    <option disabled selected>Priority</option>
                    <option value="High">High</option>
                    <option value="Moderate">Moderate</option>
                </select>
                <select {...register('status')} required className="input input-bordered w-full">
                    <option disabled selected>Status</option>
                    <option value="To-Do">To-Do</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button name='submit' className={`w-32 mx-auto font-semibold  py-2 rounded-lg bg-bg3 text-white mt-4`}>Create</button>
        </form>
    );
};

export default ModalForm;