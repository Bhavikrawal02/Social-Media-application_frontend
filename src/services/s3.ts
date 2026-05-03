import { api } from "@/lib/api"
import axios, { isAxiosError } from "axios"

export const uploadFile = async (file: any, url: string = "/upload") => {
  try {
    const payload = { "Content_type": file.type }
    const response = await api.post(url, payload)
    const signedUrl = response.data.signed_url
    console.log({signedUrl})
    console.log(file.type)
    const uploadResponse = await axios.put(signedUrl, file, {
      headers: {
        "Content-Type": file.type
      }
    })
    if (uploadResponse.status == 200) {
      return response.data;
    }
    else {
      throw new Error("Error in Uploading")
    }
  }
  catch (error) {
    if (isAxiosError(error)) {
      const message = error.response?.data.error ?? "Error in Uploading"
      throw new Error(message)
    }
    throw new Error("Error in uploading")
  }
}

export const getS3FileUrl = async (file_key: any) => {
  try {
    const response = await api.get("/upload", {
      params: { file_key }
    })
    return response.data
  }
  catch (error) {
    if (isAxiosError(error)) {
      const message = error.response?.data.error ?? "Error in Uploading"
      throw new Error(message)
    }
    throw new Error("Error in uploading")
  }
}
export const deleteFileFroms3 = async (file_key:any)=>{
  try{
    const signed_url = await api.delete("/upload",{
      params:{file_key}
    })
    const response = await axios.delete(signed_url.data)
    if(response.status===204){
      return {"message":"ok"}
    } 
  }
  catch(error){
    if(axios.isAxiosError(error)){
      const message = error.response?.data.detail && "Deletion Failed"
      throw new Error(message)
    }
    else{
      throw new Error("Deletion Failed")
    }
  }
}