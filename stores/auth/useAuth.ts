import { defineStore } from "pinia";
import type { Account } from "~/types/auth/auth";

export const useAuth = defineStore('auth', () => {
    const toast = useToast();
    const res = reactive<Account>({
    })
    const signInErr = ref()
    const loading = ref<boolean>(false)
    const supabase = useSupabaseClient()

    const signIn = async (payload: { email: string, password: string }) => {
        loading.value = true;
        const { data, error } = await supabase.auth.signInWithPassword({
            email: payload.email,
            password: payload.password
        })
        if (error) {
            signInErr.value = error
            toast.add({
                title: 'Login failed!',
                description: 'Please try again later!',
                color: 'red'
            })
        } else if (data.session) {
            const user = data.session.user
            res.email = user.email ?? ''
            toast.add({
                title: 'Đăng nhập thành công',
                description: `Chào mừng admin ${res.email}`,
                color: 'green'
            })
        }
        loading.value = false
    }

    const load = async () => {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
            signInErr.value = error
            toast.add({
                title: "Failed to load information admin",
                description: "Please login or try again later",
                color: 'red'
            })
        } else if (data.session) {
            const admin = data.session.user
            res.email = admin.email
        }
    }

    const reset = () => {
        res.email = ''
        signInErr.value = ''
        loading.value = false
    }

    const signOut = async () => {
        await supabase.auth.signOut();
        reset();
    }

    return {
        res,
        loading,
        signInErr,
        signIn,
        signOut,
        load,
        reset
    }
})