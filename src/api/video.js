import axios from "axios";

// http://loacalhost:8080/api/
const instance = axios.create({
    baseURL: "http://localhost:8080/api/"
});

   // async ~ await + axios
export const getCategories = async () => { // 요게 프론트에서 함수임
    return await instance.get("category") // 요건 변수
};
export const addVideo = async (data) => {
    return await instance.post("video", data) 
};
export const getVideos = async () => {
    return await instance.get("video")
};