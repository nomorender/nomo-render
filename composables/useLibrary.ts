import type { Library } from "~/types/library/library"

export const useLibrary = () => {
    const library = ref<Library | null>(null)
    const updateError = ref<string | null>(null)
    const addError = ref<string | null>(null)
    const isLoading = ref<boolean>()
    const supabase = useSupabaseClient<Library>()

    const update = async (payload: Partial<Library>, id: string) => {
        updateError.value = null;
        try {
            isLoading.value = true
            const { data, error } = await supabase.from('library').update(payload).eq('id', id).select().single()
            if (error) {
                updateError.value = error.message
                return { success: false, error: error.message }
            }
            library.value = data as Library
            return { success: true }
        } catch (error: any) {
            updateError.value = error.message
        } finally {
            isLoading.value = false
        }
    }

    const add = async (payload: Partial<Library>) => {
        addError.value = null;
        try {
            isLoading.value = true
            const { data, error } = await supabase.from('library').insert(payload).select().single()
            if (error) {
                addError.value = error.message
                return { success: false, error: error.message }
            }
            library.value = data as Library
            return { success: true }
        } catch (error: any) {
            addError.value = error.message
        } finally {
            isLoading.value = false
        }
    }
    return {
        updateError,
        isLoading,
        update,
        add,
        addError,
        library
    }
}