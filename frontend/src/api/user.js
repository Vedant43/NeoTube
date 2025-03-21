import { apiClient } from "./client"

const fetchProfileInfo = async () => {
    const response = await apiClient.get("user/profile-info")   
    return response.data.data
}

const userSignIn = async (data) => {
    const response = await apiClient.post("user/signin", data, { NoAuth : true })
    return response.data.data
}

const userSignUp = async (data) => {
    const response = await apiClient.post("user/signup", data, { NoAuth : true })
    return response.data.data
}

const subscribe = async (channelId) => {
    const response = await apiClient.post("user/subscribe", {channelId})
    return response
}

export default { 
    fetchProfileInfo, 
    userSignIn, 
    userSignUp,
    subscribe 
}