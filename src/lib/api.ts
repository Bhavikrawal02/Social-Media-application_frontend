import { getAuth, logout } from "@/utils/auth";
import axios , {AxiosError, type InternalAxiosRequestConfig} from "axios";
// import { toast } from "sonner";

export const api = axios.create({
    baseURL: import.meta.env.VITE_HUB_BASE_API_URL,
    headers:{
        "Content-Type":"application/json"
    },
})

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const { token } = getAuth()
        config.headers = config.headers ??  {};
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    (error:AxiosError) => {
        
        if (error?.response?.status === 401 || error?.response?.status === 403) {
            logout()
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)