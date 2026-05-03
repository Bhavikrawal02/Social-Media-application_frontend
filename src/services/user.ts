import { api } from "@/lib/api"
import { toast } from "sonner"
export const fetchUserData = async ()=>{
    try{
        const response = await api.get(`/users`)
        return response.data
    }
    catch(error){
        toast.error("Unable to fetch user")
    }
}