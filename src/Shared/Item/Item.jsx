import { FcExpired } from "react-icons/fc";
import { TiDeleteOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import useTasks from "../../Hooks/useTasks/useTasks";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/AxiosPublic/AxiosPublic";
import EditForm from "../EditForm/EditForm";

const Item = ({ todo }) => {
    
    const [tasks , loadTask , refetch] = useTasks();
    const axiosPublic = useAxiosPublic();

    const handleItemDelete = (id) => {
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            
            axiosPublic.delete(`/tasks/${id}`)
                .then(res => {
                    console.log(res)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        });
                    refetch();
                })
                .catch(err => console.log(err))
            
        }
});
    }

    return (
        <div className="w-full bg-bg4 p-2 space-y-1 rounded-md">
            <h1 className="font-semibold text-center">{todo.title}</h1>
            <p className="text-sm">{todo.description}</p>
            
            <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                    <FcExpired  className="text-red-400"/>
                    <h1 className="text-xs font-bold">{todo.deadline}</h1> 
                </div>

                <div className="flex items-center gap-4 text-2xl mr-6">
                    <button onClick={()=>handleItemDelete(todo._id)}><TiDeleteOutline /></button>
                    <button onClick={()=>document.getElementById(`${todo._id}`).showModal()}><CiEdit /></button>
                </div>
            </div>

            {/* Modal */}
            <dialog id={todo._id} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Edit task</h3>
                    <EditForm todo={todo}></EditForm>
                </div>
            </dialog>

        </div>
    );
};

export default Item;