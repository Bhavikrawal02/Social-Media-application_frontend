import { FormikProvider } from "formik"
import { useAddPost } from "./hooks/useAddPost"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PostCard } from "@/components/custom/PostCard"

export const AddPost = () => {
    const { formik,handleFileChange,postImageError } = useAddPost()
    return (
        <div className="add-post-page bg-[#1E1B3A] text-[#FFFFFF] min-h-[90vh] m-1 rounded-xl p-10">
            <div className="add-post flex flex-col text-center w-[60vw] mx-auto gap-5 border border-[#A78BFA]  rounded-xl p-7 pt-3">
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-xl">Got something to share?</h1>
                    <p className=" text-[14px]">Add a new post</p>
                </div>
                <FormikProvider value={formik}>
                    <form className="flex flex-col gap-6 items-center" onSubmit={formik.handleSubmit}>
                        <div className="inputs flex flex-col gap-4">
                            <div>
                                <Input className="min-w-60 border-violet-400" type="file" name="post_url" placeholder="URl.." onChange={(e)=>handleFileChange(e)}/>
                                {postImageError && <p className="text-red-500 text-sm">{postImageError}</p>}
                            </div>
                            <Input className="min-w-60 border-violet-400" value={formik.values.caption} type="text" name="caption" placeholder="Caption..." onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        </div>
                        <Button className="w-fit cursor-pointer rounded-2xl  text-violet-400" variant={"outline"} type="submit">
                            Add Post
                        </Button>
                    </form>
                </FormikProvider>
            </div>
            <div className="w-full border-t border-violet-500/30 pt-6 text-left mt-5">
                <p className="text-md text-violet-300 mb-2">Post preview</p>
                <PostCard
                    username="rawal.bhavik02"
                    post_url_key={(!formik.errors.post_url && formik.values.post_url) ? formik.values.post_url : ""}
                    caption={formik.values.caption} 
                    page="addpost"
                    />
            </div>
        </div>
    )
}