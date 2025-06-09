import { defineStore } from 'pinia'
import type { PostgrestError } from '@supabase/supabase-js'
import type { slogan } from '~/types/homepage/slogan'

export const useSlogan = defineStore('slogan', () => {
    const slogan = ref<slogan | null>(null)
    const loading = ref<boolean>(false)
    const error = ref<PostgrestError | null>(null)
    const supabase = useSupabaseClient()

    const load = async () => {
        if (slogan.value || loading.value) return

        loading.value = true
        const { data, error: fetchError } = await supabase
            .from('homepage_slogans')
            .select('*')
            .limit(1)
            .single()

        if (fetchError) {
            error.value = fetchError
        } else {
            slogan.value = data
        }
        loading.value = false
    }
    return {
        slogan,
        loading,
        error,
        load,
    }
})