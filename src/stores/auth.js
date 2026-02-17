import api from "@/api/http";
import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useAuthStore = defineStore('auth', () => {
    let user = ref(null);
    let token = ref(localStorage.getItem('token'));
    let isLoggedIn = computed(() => !!token.value)
    console.log(isLoggedIn);
    

    async function login(email, password){
        const res = await api.post('/auth/login', {email, password});
        user.value = res.data.data.user;
        token.value = res.data.data.token;
        localStorage.setItem('token', token.value);
    }

    async function logout() {
        token.value = null;
        user.value = null;
        localStorage.removeItem('token')
    }

    return { user, token, isLoggedIn, login, logout}
})