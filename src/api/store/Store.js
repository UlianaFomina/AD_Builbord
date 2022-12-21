import {makeAutoObservable} from "mobx";
import AuthService from "../service/AuthService";
import axios from "axios";
import api, {API_URL} from "../http/api";
import refreshApi from "../http/refreshApi";
import UserService from "../service/UserService";

export default class Store {
    user = {}
    isAuth = false;

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async login(username, password) {
        try{
            const response = await AuthService.login(username, password)
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken)
            localStorage.setItem('username', response.data.username)
            let roles = response.data.roles;
            if(roles.includes("ROLE_ADMIN")){
                localStorage.setItem('role', "ADMIN");
            }else {
                localStorage.setItem('role', "USER");
            }
            this.setAuth(true)
            this.setUser(response.data.username)
        }catch (e){
            console.log(e.response.data.message)
        }
    }

    async registration(email, username, password) {
        try{
            const response = await AuthService.registration({email, username, password})
        }catch (e){
            console.log(e.response.data.message)
        }
    }

    async getUserByUsername(username) {
        const user = await UserService.getUserByUsername(username)

        return user;
    }

    async logout() {
        await AuthService.logout();
        this.setAuth(false)
        this.setUser(undefined)
    }

    async checkAuth() {
        try {
            const response = await refreshApi.get('/api/v1/user/refresh');
            let accessToken = response.data.accessToken;
            let username = response.data.username
            console.log("Refresh Token: " +  accessToken)
            localStorage.setItem('token', accessToken)
            localStorage.setItem('username', username)
            let roles = response.data.roles;
            if(roles.includes("ROLE_ADMIN")){
                localStorage.setItem('role', "ADMIN");
            }else {
                localStorage.setItem('role', "USER");
            }
            this.setAuth(true)
            this.setUser(response.data.username)
        }catch (e){
            console.log(e.response.data.message)
        }
    }
}