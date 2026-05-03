import type { Rootstate } from "@/redux/store"
import { getS3FileUrl } from "@/services/s3"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useProfilePosts=(postImageKey:string)=>{
    const [postImageUrl,setPostImageUrl] = useState<string | null>(null)
    const userData = useSelector((state:Rootstate)=>state.user)
    const postObject = userData?.posts?.find((obj) =>obj.post_url == postImageKey)
    const fetchPostUrl = async ()=>{
        try{
            const postImage = await getS3FileUrl(postImageKey)
            setPostImageUrl(postImage)
        }catch(error:unknown){
            console.log(error)
        }
    }
    useEffect(()=>{
        if(postImageKey){
            fetchPostUrl()
        }
    },[postImageKey])
    return{
        postImageUrl,
        userData,
        postObject,
    }
}