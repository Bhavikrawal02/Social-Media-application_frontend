import { ProfilePosts } from "@/components/custom/ProfilePosts"
import { useProfile } from "./hooks/useProfile"
import { type UserPostsType } from "@/types"

export const Profile = () => {
    const { userData, page,profileImageUrl } = useProfile()
    return (
        <div className="add-post-page bg-[#1E1B3A] text-[#FFFFFF] min-h-[90vh] m-1 rounded-xl p-10">
            <div className="add-post flex flex-col  w-[60vw] mx-auto gap-5 border border-[#A78BFA]  rounded-xl p-7 pt-3">
                <div className="flex gap-2 justify-between">
                    <div className="profile flex flex-col">
                        <div className="flex gap-3 items-center">
                            {
                                profileImageUrl &&
                                <div>
                                    <img className="object-cover aspect-square w-18 rounded-full" src={profileImageUrl} alt="profile_image" />
                                </div>
                            }
                            <div className="flex flex-col gap-3">
                                <h1 className="font-bold text-2xl">{userData?.username}</h1>
                                <p className="text-md">{userData?.bio}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex ">
                        <div className="flex gap-5 text-center items-center">
                            <div className="following text-xl">
                                <p>Followers</p>
                                <p>400</p>
                            </div>
                            <div className="following text-xl ">
                                <p>Following</p>
                                <p>400</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border-t border-violet-500/30 pt-6 text-left mt-5"></div>
                <div className=" flex flex-col gap-3 ">
                    <h1 className="font-bold text-md text-center">Your Posts</h1>
                    {
                        (userData?.posts.length<=0) ?
                            <h1 className="font-bold text-md text-center"> No posts to display</h1> :
                            <div className="posts grid grid-cols-3 gap-3">
                                {userData.posts?.map((obj: UserPostsType) => (
                                    obj?.post_url && <ProfilePosts key={obj.post_id} postImageKey = {obj.post_url}/>
                                ))}
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
