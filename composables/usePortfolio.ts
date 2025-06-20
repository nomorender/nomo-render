import type { Portfolio } from "~/types/portfolio/portfolio"

export const usePortfolio = () => {
    const portfolio = ref<Portfolio | null>(null)
    const updateError = ref<string | null>(null)
    const addError = ref<string | null>(null)
    const isLoading = ref<boolean>()
    const supabase = useSupabaseClient<Portfolio>()

    const update = async (payload: Partial<Portfolio>, id: string) => {
        updateError.value = null;
        try {
            isLoading.value = true
            const { data, error } = await supabase.from('portfolio').update(payload).eq('id', id).select().single()
            if (error) {
                updateError.value = error.message
                return { success: false, error: error.message }
            }
            portfolio.value = data as Portfolio
            return { success: true }
        } catch (error: any) {
            updateError.value = error.message
        } finally {
            isLoading.value = false
        }
    }

    const add = async (payload: Partial<Portfolio>) => {
        addError.value = null;
        try {
            isLoading.value = true
            const { data, error } = await supabase.from('portfolio').insert(payload).select().single()
            if (error) {
                addError.value = error.message
                return { success: false, error: error.message }
            }
            portfolio.value = data as Portfolio
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
        addError
    }
}