import type { Library } from "~/types/library/library";

type FilterJob = {
    tag?: string;
    page?: number;
    limit?: number;
};

export const useLibraryStore = defineStore('library', () => {
    const res = ref<Library[]>([]);
    const err = ref();
    const countTotal = ref(0);
    const loading = ref<boolean>(true);
    const supabase = useSupabaseClient();

    const load = async (filter: FilterJob = {}) => {
        loading.value = true;
        res.value = [];
        let baseQuery = supabase
            .from('library')
            .select('*', { count: 'exact', head: true })
            .order('created_at', { ascending: true })

        if (filter.tag) {
            baseQuery = baseQuery.eq('tag', filter.tag);
        }

        const { count, error: countError } = await baseQuery;
        countTotal.value = count || 0;

        let dataQuery = supabase
            .from('library')
            .select('*')
            .order('created_at', { ascending: true })

        if (filter.tag) {
            dataQuery = dataQuery.eq('tag', filter.tag);
        }

        if (filter.page && filter.limit) {
            const from = (filter.page - 1) * filter.limit;
            const to = from + filter.limit - 1;
            dataQuery = dataQuery.range(from, to);
        }
        const { data, error: dataError } = await dataQuery;

        err.value = countError || dataError;
        res.value = data as Library[];
        loading.value = false;
    };

    return {
        res,
        err,
        load,
        countTotal,
        loading,
    };
});
