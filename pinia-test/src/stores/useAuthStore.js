import {defineStore} from "pinia";
import {loginWithApi} from "../api.js";

export const useAuthStore = defineStore('auth', {

    //Это данные, как data
    state: () => ({
        user: null
    }),

    //по сути геттеры или computed
    getters: {
        isAuthenticated: (store) => !!store.user,

        //второй способ описания компонента getters
        isAuthenticated2() {
            return !!this.user
        }
    },

    //методы, то есть то, что мутирует
    actions: {
        setUser(newUser){
            this.user = newUser;
        },
        
        async login(email, password){
            this.setUser(await loginWithApi(email, password));
        }
    }
});