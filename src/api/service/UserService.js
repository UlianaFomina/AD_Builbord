import api from "../http/api";

export default class UserService {

    static fetchCurrentUser(){
        return api.get('/api/v1/user')
    }

    static async fetchUsers() {
        let resultUsers = await api.get('/api/v1/user');
        return resultUsers;
    }
}