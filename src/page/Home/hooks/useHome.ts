import { getFeed } from "@/services/posts"
import { type FeedDataType } from "@/types"
import { useEffect, useState } from "react"
import { toast } from "sonner"


export const useHome = () => {
    const [feedData, setFeedData] = useState<FeedDataType[]>([])
    const fetchData = async () => {
        try{
            const data = await getFeed();
            setFeedData(data)
        }
        catch(error:any){
            console.log(error)
            toast.error(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return {
        feedData,
    }
}