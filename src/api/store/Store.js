import {makeAutoObservable} from "mobx";
import AuthService from "../service/AuthService";
import axios from "axios";
import api, {API_URL} from "../http/api";

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
            localStorage.setItem('username', response.data.username)
            this.setAuth(true)
            this.setUser(response.data.username)
        }catch (e){
            console.log(e.response.data.message)
        }
    }

    async registration(email, username, password) {
        try{
            const response = await AuthService.registration({email, username, password})
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.username)
        }catch (e){
            console.log(e.response.data.message)
        }
    }

    async logout() {
        await AuthService.logout();
        this.setAuth(false)
        this.setUser(undefined)
    }

    async checkAuth() {
        try {
            const response = await api.get('/api/v1/user/refresh')
            let accessToken = response.data.accessToken;
            let username = response.data.username
            console.log("Refresh Token: " +  accessToken)
            localStorage.setItem('token', accessToken)
            localStorage.setItem('username', username)
            this.setAuth(true)
            this.setUser(response.data.username)
        }catch (e){
            console.log(e.response.data.message)
        }
    }
}