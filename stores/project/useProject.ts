import type { Project } from "~/types/project/project";

type FilterProject = {
    page?: number;
    limit?: number;
};
export const useProjectStore = defineStore('project', () => {
    const res = ref<Project[]>([]);
    const err = ref();
    const countTotal = ref(0);
    const loading = ref<boolean>(true);
    const supabase = useSupabaseClient();
    const load = async (filter: FilterProject = {}) => {
        try {
            loading.value = true;
            res.value = [];
            let dataQuery = supabase
                .from('project')
                .select('*', { count: 'exact' });
            if (filter.page && filter.limit) {
                const from = (filter.page - 1) * filter.limit;
                const to = from + filter.limit - 1;
                dataQuery = dataQuery.range(from, to);
            }
            const { count, data, error: dataError } = await dataQuery;
            err.value = dataError?.message;
            res.value = data as Project[];
            countTotal.value = count ?? 0;
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
        countTotal,
        loading,
    };
});
