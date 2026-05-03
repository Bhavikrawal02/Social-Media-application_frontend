import * as Yup from "yup"

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/

export type InitialSignupValueType = {
    username:string
    email: string
    password: string
    bio:string
    profile_image:string
}

export const initialSignupValue: InitialSignupValueType = {
    username:"",
    email: "",
    password: "",
    bio:"",
    profile_image:""
}

export const SignupValidation = Yup.object().shape({
    username: Yup.string().required("Username is required !"),
    email: Yup.string().required("Email is required !").matches(EMAIL_REGEX, "Invalid email address !"),
    password: Yup.string().required("Password is required !").matches(PASSWORD_REGEX, "Use strong password !"),
    bio: Yup.string().notRequired(),
})
