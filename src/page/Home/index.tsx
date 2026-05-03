import { PostCard } from "@/components/custom/PostCard"
import { useHome } from "./hooks/useHome"

export const Home = () =>{
    const {feedData} = useHome()
    return(
        <div className="homepage bg-[#1E1B3A] text-[#FFFFFF] h-[90vh] m-1 rounded-xl">
            <div className="feed flex flex-col gap-10 p-10 w-full h-[90vh] overflow-auto">
                {feedData.length>0 ? feedData.map(obj=>{
                    return <PostCard         
                    key={obj.post_id}
                    username= {obj.user.username}
                    post_url_key={obj.post_url}
                    caption={obj.caption}
                    updated_at={obj.updated_at}   
                    post_id={obj.post_id}/>
                }) : <h1 className="text-center ">No Posts has been made</h1>}
            </div>
        </div>
    )
}