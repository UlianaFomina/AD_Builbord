import api from "../http/api";

export default class DeviceService {

    static async createNewDevice(title, impressionPerHour, adId){
        const username = localStorage.getItem('username');
        if(!impressionPerHour){
            impressionPerHour = 1;
        }
        console.log(impressionPerHour)
        const objectToCreate = {
            'title': title,
            'impressionPerHour': impressionPerHour
        }
        return await api.post(`/api/v1/device/${username}`, objectToCreate)
    }

    static async getMyDevices(){
        let username = localStorage.getItem("username");
        const devices = await api.get(`/api/v1/device/my/${username}`);
        return devices;
    }

    static async getAll(){
        const devices = await api.get("/api/v1/device/all")

        return devices;
    }

    static async getById(id) {
        const device = await api.get(`/api/v1/device/${id}`)

        return device;
    }

    static async toggleDeviceStatus(deviceId) {
        console.log(deviceId)
        const id = Number(deviceId)
        await api.delete(`/api/v1/device/${id}`);
    }

    static async attachAdvertisementToDevice(deviceId, adId) {
        await api.post(`/api/v1/device/attach/${deviceId}/${adId}`)
    }

    static async getAllActive() {
        const devices = await api.get("/api/v1/device?isActive=true");
        return devices;
    }
}