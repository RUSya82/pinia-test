import {defineStore} from "pinia";
import {loginWithApi} from "../api.js";
import {computed, readonly, ref} from "vue";

// export const useAuthStore = defineStore('auth', {
//
//     //Это данные, как data
//     state: () => ({
//         user: null
//     }),
//
//     //по сути геттеры или computed
//     getters: {
//         isAuthenticated: (store) => !!store.user,
//
//         //второй способ описания компонента getters
//         isAuthenticated2() {
//             return !!this.user
//         }
//     },
//
//     //методы, то есть то, что мутирует
//     actions: {
//         setUser(newUser){
//             this.user = newUser;
//         },
//
//         async login(email, password){
//             this.setUser(await loginWithApi(email, password));
//         }
//     }
// });
// Composition Api like style
export const useAuthStore = defineStore('auth', () => {
    const user = ref(null);
    const isAuthenticated = computed(() => !!user.value);
    const setUser = (value) => {
        user.value = value;
    };

    const login = async (email, password) => {
        user.value = await loginWithApi(email, password);
    };

    return {
        user: readonly(user),
        isAuthenticated,
        setUser,
        login,
    };
});