import { api } from "@/lib/api";
import type { InitialLoginValueType } from "@/page/login/constants";
import type { InitialSignupValueType } from "@/page/signup/constants";
import axios, { isAxiosError } from "axios";

export const SignupRequest= async (payload:InitialSignupValueType)=>{
    try{
        const response = await api.post(`/auth/signup`,payload)
        return response.data;
    }
    catch(error:unknown){
        if(axios.isAxiosError(error)){
            const status = error.response?.status
            const message = error.response?.data?.detail ?? "Something went Wrong"
            if(status === 409){
                throw new Error(message)
            }      
            throw new Error(message)
        }
        else{
            throw new Error("Something went Wrong")
        }
    }
}
export const LoginRequest = async (payload:InitialLoginValueType)=>{
    try{
        const response = await api.post(`/auth/login`,payload)
        return response.data
    }
    catch(error:unknown){
       if(isAxiosError(error)){
        const status = error.response?.status
        const message = error.response?.data?.detail ?? "Something went Wrong"

        if(status == 401){
            throw new Error(message)
        }
        throw new Error(message)
       }
        throw new Error("Something went wrong")
    }
}