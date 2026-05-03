import { api } from "@/lib/api"
import type { PostFormType } from "@/page/AddPost/constants"
import axios from "axios"
import { ThemeProvider } from "next-themes"
import { toast } from "sonner"

export const getFeed = async ()=>{
    try{
        const response = await api.get(`/post`)
        return response.data
    }
    catch(error){
       if(axios.isAxiosError(error)){
            const message = error.response?.data.detail ??  "Something went wrong"
            throw new Error(message)
        }
        else{
            throw new Error("Something went wrong")
        }
    }
}
export const addPost = async (payload:PostFormType)=>{
    try{
        const response = await api.post("/post",payload)
        return response.data;
    }
    catch(error){
        if(axios.isAxiosError(error)){
            const message = error.response?.data.detail ??  "Something went wrong"
            throw new Error(message)
        }
        else{
            throw new Error("Something went wrong")
        }
    }
}
export const deletePost = async(post_id:string)=>{
    try{
        const response = await api.delete(`/post/${post_id}`)
        if(response.status === 204) return {message:"ok"}
    }
    catch(error){
        if(axios.isAxiosError(error)){
            const message = error.response?.data.detail ?? "Something went wrong"
            throw new Error(message)
        }
        else{
            throw new Error("Something went wrong")
        }
    }
}

export const likePost = async(post_id:string)=>{
    console.log(post_id,"postId for liking the post")
    try{
        const response = await api.post(`/post/${post_id}/like`)
        console.log(response,"response in apicall")
        return response.data
    }
    catch(error){
        if(axios.isAxiosError(error)){
            const message = error.response?.data.detail ?? "Something went wrong"
            throw new Error(message)
        }
        else{
            throw new Error("Something went wrong")
        }
    }
}
export const getPostLikes = async(post_id:string)=>{
    try{
        const response = await api.get(`/post/${post_id}/like`)
        console.log("response for the getting the post of the users",response.data)
    }
    catch(error){
        if(axios.isAxiosError(error)){
            const message = error.response?.data.detail ?? "Something went wrong"
            throw new Error(message)
        }
    }
}