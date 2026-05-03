import * as Yup from "yup"
export type PostFormType = {
post_url:string
caption:string
}

export const initialPostFormValues:PostFormType = {
    post_url: "",
    caption:"",
}

export const postFormValidationSchema = Yup.object().shape({
    caption:Yup.string().required("Caption is required")
})