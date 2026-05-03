export type UserType = {
    user_id: string
    username: string
}
export type FeedDataType = {
    caption: string
    created_at: string
    updated_at: string
    post_id: string
    post_url: string
    user: UserType
}
export type UserPostsType = {
    caption: string
    created_at: string
    updated_at: string
    post_id: string
    post_url: string
}
export type UserDataType = {
    bio: string | null
    email: string | null
    profile_image: string | null
    user_id: string | null
    username: string | null
    posts: UserPostsType[] | []
}