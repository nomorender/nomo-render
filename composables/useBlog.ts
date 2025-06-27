import type { Blog } from "~/types/inspire/blog"

export const useBlog = () => {
    const blog = ref<Blog | null>(null)
    const updateError = ref<string | null>(null)
    const addError = ref<string | null>(null)
    const isLoading = ref<boolean>()
    const supabase = useSupabaseClient<Blog>()

    const update = async (payload: Partial<Blog>, id: string) => {
        updateError.value = null;
        try {
            isLoading.value = true
            const { data, error } = await supabase.from('blog').update(payload).eq('id', id).select().single()
            if (error) {
                updateError.value = error.message
                return { success: false, error: error.message }
            }
            blog.value = data as Blog
            return { success: true }
        } catch (error: any) {
            updateError.value = error.message
        } finally {
            isLoading.value = false
        }
    }

    const add = async (payload: Partial<Blog>) => {
        addError.value = null;
        try {
            isLoading.value = true
            const { data, error } = await supabase.from('blog').insert(payload).select().single()
            if (error) {
                addError.value = error.message
                return { success: false, error: error.message }
            }
            blog.value = data as Blog
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
        blog
    }
}