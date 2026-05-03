import { FeedXLogo } from "@/assets/logo/FeedXLogo"
import { ALL_ROUTES } from "@/routes/constants"
import { logout } from "@/utils/auth"
import { NavLink } from "react-router-dom"
import { toast } from "sonner"
export const Navbar = ()=>{
    return (
        <div className="navbar flex justify-between items-center rounded-xl text-[#FFFFFF] m-1 p-1 px-10 bg-[#1E1B3A]">
            <div className="logo">
                <FeedXLogo/>
            </div> 
            <ul className="flex justify-between items-center gap-5">
                <NavLink to={ALL_ROUTES.HOME} className={({isActive})=> isActive ? "underline": ""} >Home</NavLink>
                <NavLink to={ALL_ROUTES.ADDPOST} className={({isActive})=> isActive ? "underline": ""} >Add Post</NavLink>
                <NavLink to={ALL_ROUTES.PROFILE} className={({isActive})=> isActive ? "underline": ""} >Profile</NavLink>
            </ul>
                <button onClick={()=>{logout(); toast.success("Logged Out")}} className="cursor-pointer">Logout</button>
        </div>
    )
}