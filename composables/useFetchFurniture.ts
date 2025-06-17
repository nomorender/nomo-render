import type { Furniture } from "~/types/furniture/furniture"

export const useFurniture = () => {
    const furnitureList = ref<Furniture[] | null>()
    const fetchError = ref<string | null>()
    const isLoading = ref<boolean>()
    const supabase = useSupabaseClient<Furniture>()
    const fetchFurnitureList = async () => {
        try {
            isLoading.value = true;
            const { data, error } = await supabase.from('furniture').select('*').order('stt', { ascending: true });
            if (error) {
                fetchError.value = error.message;
                return { success: false, error: error.message };
            }
            furnitureList.value = data as Furniture[] || null;
            return { success: true };
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            fetchError.value = errorMessage;
            return { success: false, error: errorMessage };
        } finally {
            isLoading.value = false;
        }
    }
    return {
        furnitureList,
        fetchError,
        fetchFurnitureList
    }
}