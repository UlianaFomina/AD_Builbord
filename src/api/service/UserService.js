import api from "../http/api";

export default class UserService {

    static fetchCurrentUser(){
        return api.get('/api/v1/user')
    }

    static async fetchUsers() {
        let resultUsers = await api.get('/api/v1/user');
        return resultUsers;
    }

    static async getUserByUsername(username) {
        let user = await api.get(`/api/v1/user/${username}`);
        return user;
    }

    static async toggleUserStatus(userId){
        const id = Number(userId)
        await api.delete(`/api/v1/user/${id}`);
    }
}