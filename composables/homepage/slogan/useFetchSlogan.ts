import type { PostgrestError } from '@supabase/supabase-js'
import type { slogan } from '~/types/homepage/slogan';

export const useFetchSlogan = () => {
    const supabase = useSupabaseClient<slogan>();
    const slogan = ref<slogan | null>(null)
    const loading = ref(false)
    const bannerError = ref<PostgrestError | null>(null)

    const fetchSlogan = async () => {
        loading.value = true
        bannerError.value = null
        const { data, error } = await supabase
            .from('homepage_slogans')
            .select('*')
            .limit(1)
            .single()
        if (error) {
            bannerError.value = error
        } else {
            slogan.value = data
        }
        loading.value = false
    }
    return {
        slogan,
        loading,
        bannerError,
        fetchSlogan,
    }
}