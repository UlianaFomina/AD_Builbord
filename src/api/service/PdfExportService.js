import api from "../http/api";
import fileDownload from "js-file-download";

export default class PdfExportService {

    static async exportUsers(){
        const exportedUsers = await api.get(`/api/v1/pdf/users`, {
            responseType: 'blob'
        }).then(res => {
                fileDownload(res.data, 'users.pdf')
            });
        return exportedUsers;
    }

    static async exportAdvertisement(){
        const exportedAdvertisement = await api.get(`/api/v1/pdf/advertisement`, {
            responseType: 'blob'
        }).then(res => {
            fileDownload(res.data, 'advertisements.pdf')
        });
        return exportedAdvertisement;
    }

    static async exportDevice(){
        const exportedDevices = await api.get(`/api/v1/pdf/device`, {
            responseType: 'blob'
        }).then(res => {
            fileDownload(res.data, 'devices.pdf')
        });
        return exportedDevices;
    }
}