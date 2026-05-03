import { useFormik } from "formik"
import { loginValidation, type InitialLoginValueType } from "../constants"
import { initialLoginValue } from "../constants"
import { useNavigate } from "react-router-dom"
import { LoginRequest } from "@/services/auth"
import { toast } from "sonner"
import {useEffect, useState } from "react"
import { getAuth } from "@/utils/auth"
import { ALL_ROUTES } from "@/routes/constants"

export const useLogin = () => {
    const { isAuthenticated } = getAuth()
    const [loginError, setLoginError] = useState<string | null >(null)

    useEffect(() => {
        isAuthenticated && navigate(ALL_ROUTES.HOME)
    }, [isAuthenticated])

    const handleSubmit = async (values: InitialLoginValueType) => {
        try {
            const data = await LoginRequest(values)
            if (data) {
                navigate(ALL_ROUTES.HOME)
                localStorage.setItem("access_token", data?.access_token)
                toast.success("Welcome back!")
            }
        }
        catch (error:any) {
            setLoginError(error.message)
        }
    }
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: initialLoginValue,
        onSubmit: handleSubmit,
        validationSchema: loginValidation
    })
    return {
        formik,
        navigate,
        loginError
    }
}