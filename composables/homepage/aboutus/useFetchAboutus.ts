import type { PostgrestError } from '@supabase/supabase-js'
import type { aboutus } from '~/types/homepage/aboutus';

export const useFetchAboutus = () => {
    const supabase = useSupabaseClient<aboutus>();
    const res = ref<aboutus | null>(null)
    const loading = ref(false)
    const bannerError = ref<PostgrestError | null>(null)

    const fetchAboutus = async () => {
        loading.value = true
        bannerError.value = null
        const { data, error } = await supabase
            .from('homepage_aboutus')
            .select('*')
            .limit(1)
            .single()
        if (error) {
            bannerError.value = error
        } else {
            res.value = data
        }
        loading.value = false
    }
    return {
        res,
        loading,
        bannerError,
        fetchAboutus,
    }
}