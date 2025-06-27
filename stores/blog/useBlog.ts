import type { Blog } from "~/types/inspire/blog";

type FilterJob = {
    tag?: string;
    page?: number;
    limit?: number;
};

export const useBlogStore = defineStore('blog', () => {
    const res = ref<Blog[]>([]);
    const err = ref();
    const countTotal = ref(0);
    const loading = ref<boolean>(true);
    const supabase = useSupabaseClient();

    const load = async (filter: FilterJob = {}) => {
        loading.value = true;
        res.value = [];
        let baseQuery = supabase
            .from('blog')
            .select('*', { count: 'exact', head: true })
            .order('created_at', { ascending: true })

        if (filter.tag) {
            baseQuery = baseQuery.eq('tag', filter.tag);
        }

        const { count, error: countError } = await baseQuery;
        countTotal.value = count || 0;

        let dataQuery = supabase
            .from('blog')
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
        res.value = data as Blog[];
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
