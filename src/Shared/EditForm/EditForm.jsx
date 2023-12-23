
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import useAxiosPublic from '../../Hooks/AxiosPublic/AxiosPublic';
import { useAuth } from '../../AuthProvider/AuthProvider';
import { useEffect, useState } from 'react';
import useTasks from '../../Hooks/useTasks/useTasks';

const EditForm = ({todo}) => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const { user } = useAuth();
    const [tasks , loadTask , refetch] = useTasks()

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

        axiosPublic.put(`/tasks/${todo._id}`, newTask)
            .then(res => {
                console.log(res)
                refetch();
            })
            .catch(err => console.log(err))
        
        
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            
            <div className='mt-3'>
                <label className='font-semibold' htmlFor="">Title: </label>
                <input {...register('title')} type="text" defaultValue={todo.title} required className="input input-bordered w-full" />
            </div>
            <div className='mt-3'>
                <label className='font-semibold' htmlFor="">Description: </label>
                {/* <input {...register('description')} type="textArea" placeholder="Enter task description " required className="input input-bordered w-full" /> */}
                <textarea {...register('description')} className="textarea textarea-bordered w-full" defaultValue={todo.description}></textarea>
            </div>
            <div className='mt-0'>
                <label className='font-semibold' htmlFor="">Deadline: </label>
                <input {...register('deadline')} type="date" defaultValue={todo.deadline} required className="input input-bordered w-full" />
            </div>

            <div className='flex gap-2'>
                <select {...register('priority')} defaultValue={todo.priority} required className="input input-bordered mt-4 w-full">
                    <option value="High">High</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Low">Low</option>
                </select>

                <select {...register('status')} defaultValue={todo.status} required className="input input-bordered mt-4 w-full">
                    <option value="To-Do">To-Do</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                </select>

            </div>
            <button name='submit'  className={`w-32 mx-auto font-semibold  py-2 rounded-lg bg-bg3 text-white mt-4`}>Edit</button>
        </form>
    );
};

export default EditForm;