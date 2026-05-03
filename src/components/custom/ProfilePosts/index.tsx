import { useProfilePosts } from "./hooks/useProfilePosts"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PostCard } from "../PostCard"

type ProfilePostsType = {
    postImageKey: string
}
export const ProfilePosts = ({ postImageKey }: ProfilePostsType) => {
    const { postImageUrl, userData, postObject } = useProfilePosts(postImageKey)
    return (
        <>
            {<Dialog>
                <DialogTrigger asChild>
                    {postImageUrl && <img
                        src={postImageUrl}
                        alt="loading"
                        className="relative cursor-pointer z-20 rounded-2xl aspect-square w-full object-cover" />}
                </DialogTrigger>
                <DialogContent showCloseButton={false}>
                    <DialogDescription>
                        <PostCard key={postObject?.post_id} username={userData?.username} post_url_key={postObject?.post_url} caption={postObject?.caption} updated_at={postObject?.updated_at} post_id={postObject!.post_id} page="profile" />
                    </DialogDescription>
                </DialogContent>
            </Dialog>}
        </>
    )
}