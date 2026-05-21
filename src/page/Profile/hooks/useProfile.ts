import type { Rootstate } from "@/redux/store"
import { getS3FileUrl } from "@/services/s3"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useProfile = () => {
    const [profileImageUrl, setProfileImageUrl] = useState(null)
    const userData = useSelector((state: Rootstate) => state.user)
    const page = window.location.href.includes('profile') ? "Profile" : "Home"

    useEffect(() => {
        const getProfileImageUrl = async (file_key:string | null) => {
            try{
                const url = await getS3FileUrl(file_key)
                if(url){
                    setProfileImageUrl(url)
                }
            }
            catch(error){
                console.log(error)
            }
        }
        if(userData?.profile_image){
            getProfileImageUrl(userData?.profile_image)
        }
    },[userData.profile_image])

    return {
        userData,
        page,
        profileImageUrl,
    }
}