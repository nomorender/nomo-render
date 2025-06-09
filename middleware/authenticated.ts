import { useAuth } from "~/stores/auth/useAuth";

export default defineNuxtRouteMiddleware(async (to) => {
    const admin = useAuth();
    await admin.load();
    if (admin.res.email) {
        return navigateTo('/');
    }
});