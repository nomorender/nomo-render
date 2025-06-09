import { defineStore } from 'pinia'
import type { Banner } from '~/types/homepage/banner'
import type { PostgrestError } from '@supabase/supabase-js'

export const useBanner = defineStore('banner', () => {
    const banner = ref<Banner | null>(null)
    const loading = ref<boolean>(false)
    const error = ref<PostgrestError | null>(null)
    const supabase = useSupabaseClient()

    const load = async () => {
        if (banner.value || loading.value) return

        loading.value = true
        const { data, error: fetchError } = await supabase
            .from('homepage_banners')
            .select('*')
            .limit(1)
            .single()

        if (fetchError) {
            error.value = fetchError
        } else {
            banner.value = data
            loading.value = false
        }
        loading.value = false
    }
    return {
        banner,
        loading,
        error,
        load,
    }
})