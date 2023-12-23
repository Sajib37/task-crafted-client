import { IoCreateSharp } from "react-icons/io5";
import ModalForm from "../../../Shared/ModalForm/ModalForm";
import useTasks from "../../../Hooks/useTasks/useTasks";

import { GiProgression } from "react-icons/gi";
import { FcTodoList } from "react-icons/fc";
import { MdIncompleteCircle } from "react-icons/md";
import Item from "../../../Shared/Item/Item";
import { useEffect, useState } from "react";

const AllTask = () => {

    const [tasks, loadTask, refetch] = useTasks()
    
    // console.log(tasks)
    if (!tasks) {
        return <span className="loading loading-dots loading-lg"></span>
    }

   


    const todos = tasks.filter(task => task.status === "To-Do")
    const ongoingItems = tasks.filter(task => task.status === "Ongoing")
    const CompletedItems = tasks.filter(task => task.status === "Completed")


    return (
        <section className='w-full py-10 lg:mr-4 md:px-2'>
            <div className='bg-gray-100 py-2 flex justify-around'>
                <h1 className="md:text-4xl text-2xl font-bold">Task Overflow</h1>
                <h1 className="flex font-medium items-center gap-1 text-lg cursor-pointer" onClick={()=>document.getElementById('my_modal_3').showModal()}>Create New <IoCreateSharp/></h1>
            </div>

            <section className="h-16 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                <div className=" border min-w-80 max-w-96 mx-auto mt-6">
                    <div className="bg-bg2 py-2 rounded-md">
                        <h1 className="text-2xl font-bold text-white text-center flex items-center gap-2 justify-center">To do's <FcTodoList /></h1>
                    </div>
                    <div className="flex flex-col gap-3 px-2 py-6">
                        {
                            todos.map((todo,idx)=><Item key={idx} todo={todo}></Item>)
                        }
                    </div>
                </div>
                
                <div className=" border min-w-80 max-w-96 mx-auto mt-6">
                    <div className="bg-bg3 py-2 rounded-md">
                        <h1 className="text-2xl font-bold text-white text-center flex items-center gap-2 justify-center">On going <GiProgression /></h1>
                    </div>
                    <div className="flex flex-col gap-3 px-2 py-6">
                        {
                            ongoingItems.map((todo,idx)=><Item key={idx} todo={todo}></Item>)
                        }
                    </div>
                </div>
                
                <div className="  border min-w-80 max-w-96 mx-auto mt-6">
                    <div className="bg-bg2 py-2 rounded-md">
                        <h1 className="text-2xl font-bold text-white text-center flex items-center gap-2 justify-center">Completed <MdIncompleteCircle /></h1>
                    </div>
                    <div className="flex flex-col gap-3 px-2 py-6">
                        {
                            CompletedItems.map((todo,idx)=><Item key={idx} todo={todo}></Item>)
                        }
                    </div>
                </div>
            </section>

            
            
            {/* Modal */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Create new task</h3>
                    <ModalForm></ModalForm>
                </div>
            </dialog>
        </section>
    );
};

export default AllTask;