import api from "../http/api";

export default class AdvertisementService {

    static async createNewAd(title, description, file){
        let formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('description', description);
        let username = localStorage.getItem("username");
        console.log(formData)

        return await api.post(`/api/v1/advertisement/${username}`, formData);
    }

    static async getMyAd(isAppear){
        let advertisements;
        let username = localStorage.getItem("username");

        if(isAppear){
            advertisements = await api.get(`/api/v1/advertisement/my/${username}?isAppear=true`);
        }else {
            advertisements = await api.get(`/api/v1/advertisement/my/${username}`);
        }
        return advertisements;
    }

    static async getAll() {
        const advertisements = await api.get('/api/v1/advertisement/all');
        return advertisements;
    }

    static async hideById(id) {
        await api.delete(`/api/v1/advertisement/${id}`)
    }
}