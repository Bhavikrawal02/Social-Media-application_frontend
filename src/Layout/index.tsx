import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/custom/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "@/services/user";
import { addUser } from "@/redux/userSlice";
import { getAuth } from "@/utils/auth";
import { useNavigate } from "react-router-dom";
import { ALL_ROUTES } from "@/routes/constants";
import { toast } from "sonner";

export const Layout = () => {
    const navigate = useNavigate()
    const { token } = getAuth()
    const dispatch = useDispatch()

    useEffect(() => {
        const loadUser = async () => {
            try {
                const response = await fetchUserData()
                dispatch(addUser(response))
                console.log(response)
            } catch (error) {
                console.log("Session expired")
            }
        }

        if (token) {
            loadUser()
        }
        else{
            navigate(ALL_ROUTES.LOGIN)
            toast.error("Session expired")
        }
    }, [token])

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}