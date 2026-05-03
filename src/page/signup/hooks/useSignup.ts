import { useFormik } from "formik"
import { SignupValidation, type InitialSignupValueType } from "../constants"
import { initialSignupValue } from "../constants"
import { useNavigate } from "react-router-dom"
import { SignupRequest } from "@/services/auth"
import { toast } from "sonner"
import { useState } from "react"
import { uploadFile } from "@/services/s3"
import { ALL_ROUTES } from "@/routes/constants"

export const useSignup = () => {
    const navigate = useNavigate()
    const [profileImage, setProfileImage] = useState()
    const [profileImageError, setProfileImageError] = useState<string | null>()
    const [signupError, setSignupError] = useState<string | null>(null)

    const handleFileChange = (e: any) => {
        const selectedFile = e.target.files[0]
        if (!selectedFile) {
            setProfileImageError("Profile image is required")
            return;
        }
        else {
            setProfileImageError(null)
        }
        setProfileImage(selectedFile)
    }

    const handleSubmit = async (values: InitialSignupValueType) => {
        if (!profileImage) {
            setProfileImageError("Profile image is required")
            return;
        }
        const file_data = await uploadFile(profileImage, "/upload/profile-image")
        values = { ...values, "profile_image": file_data.file_key }
        try {
            const res = await SignupRequest(values)
            if (res) {
                navigate(ALL_ROUTES.LOGIN)
                toast.success(res.message)
            }
        }
        catch (error: any) {
            setSignupError(error.message)
        }
    }

    const formik = useFormik({
        initialValues: initialSignupValue,
        onSubmit: handleSubmit,
        validationSchema: SignupValidation,
    })
    return {
        formik,
        navigate,
        handleFileChange,
        signupError,
        profileImageError
    }
}