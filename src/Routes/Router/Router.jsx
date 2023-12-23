import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Dashboard from "../../Layout/Dashboard/Dashboard"
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Features from "../../Pages/Features/Features";
import AllTask from "../../Layout/Dashboard/AllTask/AllTask";
import CreateTasks from "../../Layout/Dashboard/CreateTasks/CreateTasks";
import ToDos from "../../Layout/Dashboard/ToDos/ToDos";



    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element:<Home></Home>
                },
                {
                    path: "/login",
                    element: <Login></Login>
                },
                {
                    path: "/register",
                    element: <Register></Register>
                },
                {
                    path: "/feature",
                    element: <Features></Features>
                }
            ]
        },
        {
            path: "dashboard",
            element: <Dashboard></Dashboard>,
            children: [
                {
                    path: "",
                    element: <AllTask></AllTask>
                },
                {
                    path: "createtask",
                    element: <CreateTasks></CreateTasks>
                },
                {
                    path: "todos",
                    element:<ToDos></ToDos>
                }
            ]
        }
       
    ])


export default router;