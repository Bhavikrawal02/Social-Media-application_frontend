import type { UserDataType ,UserPostsType} from "@/types";
import { createSlice , type PayloadAction} from "@reduxjs/toolkit";
const initialUserState:UserDataType = {
    user_id:null,
    username:null,
    bio:null,
    email:null,
    profile_image:null,
    posts:[]
}

export const userSlice = createSlice({
    name:"user",
    initialState:initialUserState,
    reducers:{
        addUser:(state,action:PayloadAction<UserDataType>)=>{
            state = {...action.payload}
            return state;
        },
        addNewPost:(state,action:PayloadAction<UserPostsType>)=>{
            state ={...state,posts:[...state.posts,action.payload]}
            return state;
        },
        deleteReduxPost:(state,action:PayloadAction<string>)=>{
            state = {...state,posts:state.posts.filter((obj)=>obj.post_id!== action.payload)}
            return state;
        }
    }
})
export const {addUser,addNewPost,deleteReduxPost} = userSlice.actions
export default userSlice.reducer