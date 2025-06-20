import clarity from '@microsoft/clarity'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const clarityId = String(config.public.clarityId)
    if (import.meta.client && clarityId) {
        clarity.init(clarityId)
    }
})
