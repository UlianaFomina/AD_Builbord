import api from "../http/api";
import {useNavigate} from "react-router-dom";

export default class AuthService {
    static async login(username, password){
        const params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        let promise = await api.post("/api/v1/login", params);
        return promise;
    }

    static async registration(username, email, password) {
        return await api.post("/api/v1/user/create", {
            'username': username,
            'password': password,
            'email': email,
        })
    }

    static async logout() {
        console.log("REMOVED")
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        console.log(localStorage.getItem('token'))
        console.log(localStorage.getItem('username'))
    }
}