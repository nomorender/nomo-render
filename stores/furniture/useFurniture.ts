import type { Furniture } from "~/types/furniture/furniture";

type FilterProject = {
    page?: number;
    limit?: number;
};
export const useFurnitureStore = defineStore('furniture', () => {
    const res = ref<Furniture[]>([]);
    const err = ref();
    const countTotal = ref(0);
    const loading = ref<boolean>(true);
    const supabase = useSupabaseClient();
    const load = async (filter: FilterProject = {}) => {
        try {
            loading.value = true;
            res.value = [];
            let dataQuery = supabase
                .from('furniture')
                .select('*', { count: 'exact' }).order('stt', { ascending: true });
            if (filter.page && filter.limit) {
                const from = (filter.page - 1) * filter.limit;
                const to = from + filter.limit - 1;
                dataQuery = dataQuery.range(from, to);
            }
            const { count, data, error: dataError } = await dataQuery;
            err.value = dataError?.message;
            res.value = data as Furniture[];
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
