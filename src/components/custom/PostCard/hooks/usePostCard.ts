import { deletePost, likePost } from "@/services/posts"
import { deleteFileFroms3, getS3FileUrl } from "@/services/s3"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteReduxPost } from "@/redux/userSlice"
import { toast } from "sonner"

export const usePostCard = (post_url_key: string | undefined) => {
    const dispatch = useDispatch()
    const [likedPost,setLikedPost] = useState<boolean>(false)
    const [postUrl, setPostUrl] = useState(null)
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const handleOpenMenuBar = () => {
        console.log("value of the open", openMenu)
        setOpenMenu(prev => !prev)
    }
    const fetchFileUrl = async () => {
        try {
            const post_url = await getS3FileUrl(post_url_key)
            setPostUrl(post_url)
        }
        catch (error) {
            console.log("Error", error)
        }
    }
    useEffect(() => {
        if (post_url_key) {
            fetchFileUrl()
        }
    }, [post_url_key])

    useEffect(()=>{
        
    },[])

    const handleLikeClick = async (post_id: string)=>{
        console.log("clicked like button")
        try{
            const response = await likePost(post_id)
            console.log("response for the liking a post",response)
            setLikedPost(prev=>!prev)
        }catch(error:any){
            toast.error(error)
        }
    }

    const handleDeletePost = async (post_id?: string) => {
        console.log("Delete Called", post_id)
        try {
            const deleteS3 = await deleteFileFroms3(post_url_key)
            if (deleteS3?.message === "ok") {
                try {
                    if (post_id) {
                        const response = await deletePost(post_id)
                        if (response?.message === "ok") {
                            toast.success("Post deleted Successfully")
                            dispatch(deleteReduxPost(post_id))
                        }

                    }
                }
                catch (error: any) {
                    console.log(error, "delete error")
                    toast.error(error)
                }
            }
        }
        catch (error) {
            console.log("deletes3 error", error)
        }

    }
    return {
        postUrl,
        handleOpenMenuBar,
        openMenu,
        handleDeletePost,
        handleLikeClick,
        likedPost
    }
}
