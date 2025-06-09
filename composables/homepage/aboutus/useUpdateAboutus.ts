import type { PostgrestError } from '@supabase/supabase-js'
import type { aboutus } from '~/types/homepage/aboutus'

export const useUpdateAboutus = () => {
    const supabase = useSupabaseClient<aboutus>()
    const loading = ref(false)
    const success = ref(false)
    const updateError = ref<PostgrestError | null>(null)

    const updateAboutus = async (aboutus: aboutus) => {
        loading.value = true
        success.value = false
        updateError.value = null

        try {
            let updatedData: aboutus | null = null
            if (aboutus.id) {
                const { data, error } = await supabase
                    .from('homepage_aboutus')
                    .update({ ...aboutus })
                    .eq('id', aboutus.id)
                    .select()
                    .maybeSingle()
                if (error) throw error
                updatedData = data
            } else {
                const { data, error: insertError } = await supabase
                    .from('homepage_aboutus')
                    .insert({ ...aboutus })
                    .select()
                    .single()
                if (insertError) throw insertError
                updatedData = data
            }
            success.value = true
            return updatedData
        } catch (e: any) {
            updateError.value = e
            return null
        } finally {
            loading.value = false
        }
    }
    return {
        updateAboutus,
        loading,
        success,
        updateError,
    }
}
