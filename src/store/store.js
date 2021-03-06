import {makeAutoObservable} from "mobx";
import AuthService from "../service/AuthService";
import axios from "axios";
import {API_URL} from "../http";

export default class Store {

    user = {};
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    };

    setAuth(bool) {
        this.isAuth = bool;
    };

    setUser(user) {
        this.user = user;
    };

    setLoading(bool) {
        this.isLoading = bool;
    };


    async authenticate(email, password, auth) {
        if (!auth) {
            await this.login(email , password)
        } else {
            await this.registration(email, password)
            alert('Registered!');
        }
    }
    async login(email, password) {
        try {
            const response = await AuthService.login(String(email.trim()), String(password.trim()));
            console.log(response);
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (err) {
            console.log(err)
        }
    }

    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (err) {
            console.log(err)
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (err) {
            console.log(err)
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`api/refresh`, {withCredentials: true, baseURL: API_URL});
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user)
        } catch (err) {
            console.log(err)
        } finally {
            this.setLoading(false);
        }
    }
}
