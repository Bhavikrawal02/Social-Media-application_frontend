import { Input } from "@/components/ui/input"
import { useSignup } from "./hooks/useSignup"
import { FormikProvider } from "formik"
import { Button } from "@/components/ui/button"
import { FeedXLogo } from "@/assets/logo/FeedXLogo"
import { Textarea } from "@/components/ui/textarea"
import { ALL_ROUTES } from "@/routes/constants"


export const SignupPage = () => {
    const { formik, navigate,handleFileChange,profileImageError } = useSignup()
    return (
        <div className="flex flex-col justify-center items-center  m-30 h-full">
            <div className="login-form flex flex-col text-center gap-5 bg-white rounded-xl p-7 pt-3">
                <FeedXLogo />
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="font-bold text-xl text-violet-400">Sign Up</h1>
                    <p className="text-violet-400 text-[12px] max-w-60 ">Your feed. Your voice. Your community. Join FeedX today.</p>
                </div>
                <FormikProvider value={formik}>
                    <form className="flex flex-col gap-6 items-center" onSubmit={formik.handleSubmit}>
                        <div className="inputs flex flex-col gap-4">
                            <div>
                                <Input className="min-w-60 border-violet-400" value={formik.values.username} type="text" name="username" placeholder="Username" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.username && formik.errors.username && <p className="text-red-500 text-sm">{formik.errors.username}</p>}
                            </div>
                            <div>
                                <Input className="min-w-60 border-violet-400" value={formik.values.email} type="email" name="email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}
                            </div>
                            <div>
                                <Input className="min-w-60 border-violet-400" value={formik.values.password} type="password" name="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}
                            </div>
                            <div>
                                <Textarea name="bio" placeholder="A few words that describe you…" value={formik.values.bio} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                {formik.touched.bio && formik.errors.bio && <p className="text-red-500 text-sm">{formik.errors.bio}</p>}
                            </div>
                            <div>
                                <Input className=" min-w-60  border-violet-400" type="file" name="file"  onChange={(e)=>handleFileChange(e)} />
                                {profileImageError && <p className="text-red-500 text-sm">{profileImageError}</p>}
                            </div>
                            {/* <Input className="max-w-30" type="file" accept="image/*" name="profile_image" placeholder="Input image"/> */}
                        </div>
                        <Button className="w-fit cursor-pointer rounded-2xl  text-violet-400" variant={"outline"} type="submit">
                            Sign Up
                        </Button>
                    </form>
                </FormikProvider>
                <div>
                    <p className="text-violet-400 text-[12px]">Already have an account? <span onClick={() => navigate(ALL_ROUTES.LOGIN)} className="font-bold underline cursor-pointer hover:underline-offset-2">Log In</span></p>
                </div>
            </div>
        </div>
    )
}