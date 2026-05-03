import { Heart } from "@/assets/icons/heart"
import { Avatar1 } from "../Avtar/avtar1"
import { Comment } from "@/assets/icons/comment"
import { Dots } from "@/assets/icons/dots"
import { usePostCard } from "./hooks/usePostCard"

type PostCardType = {
    username: string | null
    post_url_key?: string
    caption?: string
    updated_at?: string
    page?: string
    post_id:string
}

export const PostCard = ({ username, post_url_key, caption, updated_at, page = "home",post_id }: PostCardType) => {
    const { postUrl, handleOpenMenuBar, openMenu, handleDeletePost,handleLikeClick,likedPost } = usePostCard(post_url_key)
    return (
        <div className={`flex flex-col gap-5 ${page === "home" ? "w-[50vw]" : "w-[30vw]"} h-fit mx-auto border border-[#A78BFA] rounded-md p-3`}>
            <div className="name flex flex-col gap-2">
                <div className="flex gap-2 justify-between items-center">
                    <div className="flex gap-2 ">
                        <Avatar1 />
                        <h1>{username}</h1>
                        {page !== "profile" && <h2 className="text-[#A78BFA]">Follow</h2>}
                    </div>
                    <div className="relative">
                        {page === "profile" ?
                        <div className="cursor-pointer" onClick={handleOpenMenuBar}>
                                <Dots />
                            </div>:
                        <p>{updated_at?.split("T")[0]}</p>
    
                            }
                        {openMenu &&
                            <div className="absolute right-0 top-2 w-20 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 translate-y-2 scale-95 animate-dropdown">
                                <button className="w-full cursor-pointer text-left text-black px-4 py-2 text-sm hover:bg-gray-100 transition-colors">
                                    Edit
                                </button>
                                <button onClick={()=>handleDeletePost(post_id)} className="w-full cursor-pointer text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors">
                                    Delete
                                </button>
                            </div>}
                    </div>
                </div>
                <p>{caption}</p>

            </div>
            {postUrl && <img
                src={postUrl ? postUrl : ""}
                alt="Loading"
                className="relative z-20 rounded-2xl aspect-square w-full object-cover"
            />}
            <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                   <div className="cursor-pointer" onClick={()=>handleLikeClick(post_id)}>
                     <Heart fill={likedPost ? "red" : "#fff"} />
                    </div>
                    <Comment />
                </div>
                {postUrl && <div className="flex gap-2">
                    <h1>{username} :</h1>
                    <p>{caption}</p>
                </div>}
            </div>
        </div>
    )
}