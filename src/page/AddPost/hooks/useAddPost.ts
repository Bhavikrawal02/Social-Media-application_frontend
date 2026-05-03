import { useFormik } from "formik";
import { initialPostFormValues, postFormValidationSchema, type PostFormType } from "../constants";
import { addPost } from "@/services/posts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { uploadFile } from "@/services/s3";
import { ALL_ROUTES } from "@/routes/constants";
import { addNewPost } from "@/redux/userSlice";
import { useDispatch } from "react-redux";


export const useAddPost = () => {
    const dispatch = useDispatch()
    const [postImage, setPostImage] = useState()
    const [postImageError, setPostImageError] = useState<string | null>(null);
    const [addPostError, setAddPostError] = useState<string | null>(null)
    const handleFileChange = (e: any) => {
        const selectedFile = e.target.files[0]
        if (!selectedFile) {
            setPostImageError("Post image is required")
            return;
        }
        else {
            setPostImageError(null)
        }
        setPostImage(selectedFile)
    }

    const navigate = useNavigate()
    const handlePostSubmit = async (values: PostFormType) => {
        if (!postImage) {
            setPostImageError("Post image is required")
            return;
        }

        try {
            const file_data = await uploadFile(postImage, "/upload")
            values = { ...values, "post_url": file_data.file_key }
            const response = await addPost(values)
            console.log("response:",{response})
            if (response) {
                dispatch(addNewPost(response))
                navigate(ALL_ROUTES.PROFILE)
                console.log(response)
            }
        } catch (error) {
            setAddPostError("Failed to post image")
        }
    }
    const formik = useFormik({
        initialValues: initialPostFormValues,
        onSubmit: handlePostSubmit,
        validationSchema: postFormValidationSchema,
        validateOnChange: true,
    })
    return {
        formik,
        handleFileChange,
        postImageError,
        addPostError,
    }
}