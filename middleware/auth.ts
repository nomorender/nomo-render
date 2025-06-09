import { useAuth } from "~/stores/auth/useAuth"

export default defineNuxtRouteMiddleware(async (to) => {
    const auth = useAuth();
    await auth.load();
    if (!auth.res.email) {
        return navigateTo('/login');
    }
})