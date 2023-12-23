import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../AxiosPublic/AxiosPublic";
import { useAuth } from "../../AuthProvider/AuthProvider";



const useTasks = () => {
    const axiosPublic = useAxiosPublic();
    const { loading, user } = useAuth();
    
    
    const { data: tasks, isLoading: loadTask , refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosPublic.get(`/tasks/${user.email}`);
                // console.log(res.data)
                return res.data;
            }
        },
    });

    return [tasks , loadTask , refetch]
};

export default useTasks;