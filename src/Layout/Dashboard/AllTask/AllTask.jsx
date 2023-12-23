import { IoCreateSharp } from "react-icons/io5";
import ModalForm from "../../../Shared/ModalForm/ModalForm";
import useTasks from "../../../Hooks/useTasks/useTasks";

const AllTask = () => {

    const [tasks, loadTask, refetch] = useTasks()
    
    console.log(tasks)

    return (
        <section className='w-full py-10 lg:mr-4 md:px-2'>
            <div className='bg-gray-100 py-2 flex justify-around'>
                <h1 className="md:text-4xl text-2xl font-bold">Task Overflow</h1>
                <h1 className="flex items-center gap-1 text-lg cursor-pointer" onClick={()=>document.getElementById('my_modal_3').showModal()}>Create New <IoCreateSharp/></h1>
            </div>

            <section className="h-16 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                <div className="bg-bg2 min-h-[90vh] min-w-80 max-w-96 mx-auto p-2">
                    <h1 className="text-2xl underline underline-offset-4 font-bold text-white text-center">To do's</h1>
                </div>
                <div className="bg-bg3 min-h-[90vh] min-w-80 max-w-96 mx-auto"></div>
                <div className="bg-bg2 min-h-[90vh] min-w-80 max-w-96 mx-auto"></div>
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