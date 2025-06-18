import type { Furniture } from "~/types/furniture/furniture"

export const useFurniture = () => {
    const furnitureList = ref<Furniture[] | null>()
    const fetchError = ref<string | null>()
    const isLoading = ref<boolean>()
    const supabase = useSupabaseClient<Furniture>()
}