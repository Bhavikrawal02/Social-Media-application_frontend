import { toast } from "sonner"
export const getAuth = () => {
    const token = localStorage.getItem("access_token")
    return {
        token,
        isAuthenticated: Boolean(token)
    }
}
export const logout = () => {
    const {token} = getAuth()
    if(token){
        localStorage.removeItem("access_token")
        window.location.href = "/login"
        toast.error("Session Expired , Please Login Again")
    }
}