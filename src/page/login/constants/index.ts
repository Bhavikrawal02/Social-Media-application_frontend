import * as Yup from "yup"

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export type InitialLoginValueType = {
    email: string
    password: string
}

export const initialLoginValue: InitialLoginValueType = {
    email: "",
    password: "",
}

export const loginValidation = Yup.object().shape( {
    email: Yup.string().required("Email is required").matches(EMAIL_REGEX, "Invalid email address"),
    password: Yup.string().required("Password is required"),
})
