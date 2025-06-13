import type { Project } from "~/types/project/project"

export const useFetchProjectHome = () => {
    const projectList = ref<Project[] | null>()
    const fetchError = ref<string | null>()
    const isLoading = ref<boolean>()
    const supabase = useSupabaseClient()
    const fetchProjectHome = async () => {
        try {
            isLoading.value = true;
            const { data, error } = await supabase.from('project').select('*').eq('page', 'project');;
            if (error) {
                fetchError.value = error.message;
                return { success: false, error: error.message };
            }
            projectList.value = data as Project[] || null;
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
        projectList,
        fetchError,
        fetchProjectHome,
        isLoading
    }
}