import { Input } from "@/components/ui/input"
import { useLogin } from "./hooks/useLogin"
import { FormikProvider } from "formik"
import { Button } from "@/components/ui/button"
import { FeedXLogo } from "@/assets/logo/FeedXLogo"
import { ALL_ROUTES } from "@/routes/constants"


export const LoginPage = () => {
    const { formik, navigate, loginError } = useLogin()
    return (
        <div className="flex flex-col justify-center items-center m-50  ">
            <div className="login-form flex flex-col text-center gap-5 bg-white rounded-xl p-7 pt-3">
                <FeedXLogo />
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-xl text-violet-400">Sign In</h1>
                    <p className="text-violet-400 text-[12px]">Enter your credentials to continue</p>
                </div>
                <FormikProvider value={formik}>
                    <form className="flex flex-col gap-6 items-center" onSubmit={formik.handleSubmit}>
                        <div className="inputs flex flex-col gap-4">
                            <div>
                                <Input className="min-w-60 border-violet-400" value={formik.values.email} type="email" name="email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
                            </div>
                            <div>
                                <Input className="min-w-60 border-violet-400" value={formik.values.password} type="password" name="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}
                            </div>
                        </div>
                        <div>
                            <Button className="w-fit cursor-pointer rounded-2xl  text-violet-400" variant={"outline"} type="submit">
                                Sign In
                            </Button>
                            {loginError && <p className="text-red-500 text-sm m-1">{loginError}</p>}
                        </div>

                    </form>
                </FormikProvider>
                <div>
                    <p className="text-violet-400 text-[12px]">Don't have an account? <span onClick={() => navigate(ALL_ROUTES.SIGNUP)} className="font-bold underline cursor-pointer hover:underline-offset-2">Create one</span></p>
                </div>
            </div>
        </div>
    )
}