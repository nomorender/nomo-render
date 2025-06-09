import type { PostgrestError } from '@supabase/supabase-js'
import type { Banner } from '~/types/homepage/banner';

export const useFetchBanner = () => {
    const supabase = useSupabaseClient<Banner>();
    const banner = ref<Banner | null>(null)
    const loading = ref(false)
    const bannerError = ref<PostgrestError | null>(null)

    const fetchBanner = async () => {
        loading.value = true
        bannerError.value = null
        const { data, error } = await supabase
            .from('homepage_banners')
            .select('*')
            .limit(1)
            .single()
        if (error) {
            bannerError.value = error
        } else {
            banner.value = data
        }
        loading.value = false
    }
    return {
        banner,
        loading,
        bannerError,
        fetchBanner,
    }
}