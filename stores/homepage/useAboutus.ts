import { defineStore } from 'pinia'
import type { PostgrestError } from '@supabase/supabase-js'
import type { aboutus } from '~/types/homepage/aboutus'

export const useAboutus = defineStore('aboutus', () => {
    const res = ref<aboutus | null>(null)
    const loading = ref<boolean>(false)
    const error = ref<PostgrestError | null>(null)
    const supabase = useSupabaseClient()

    const load = async () => {
        if (res.value || loading.value) return

        loading.value = true
        const { data, error: fetchError } = await supabase
            .from('homepage_aboutus')
            .select('*')
            .limit(1)
            .single()

        if (fetchError) {
            error.value = fetchError
        } else {
            res.value = data
        }
        loading.value = false
    }
    return {
        res,
        loading,
        error,
        load,
    }
})