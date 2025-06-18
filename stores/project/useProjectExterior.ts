import type { Project } from "~/types/project/project";

export const useProjectExterior = defineStore('project-exterior', () => {
    const res = ref<Project[]>([]);
    const err = ref();
    const loading = ref<boolean>(true);
    const supabase = useSupabaseClient();
    const load = async () => {
        try {
            loading.value = true;
            res.value = [];
            let dataQuery = supabase.from('project').select('*').eq('page', 'exterior');
            const { data, error: dataError } = await dataQuery;
            err.value = dataError?.message;
            res.value = data as Project[];
        } catch (error: any) {
            err.value = error.message ?? 'Unknown error'
        } finally {
            loading.value = false
        }
    };
    return {
        res,
        err,
        load,
        loading,
    };
});
