import type { Portfolio } from "~/types/portfolio/portfolio";

type FilterPortfolio = {
    category?: string;
    page?: number;
    limit?: number;
};
export const usePortfolio = defineStore('portfolio', () => {
    const res = ref<Portfolio[]>([]);
    const err = ref();
    const loading = ref<boolean>(true);
    const supabase = useSupabaseClient();
    const countTotal = ref(0);
    const load = async (filter: FilterPortfolio = {}, append = false) => {
        try {
            loading.value = true;
            if (!append) res.value = [];
            let dataQuery = supabase
                .from('portfolio')
                .select('*', { count: 'exact' }).order('created_at', { ascending: false });
            if (filter.category) {
                dataQuery = dataQuery.eq('category', filter.category);
            }
            if (filter.page && filter.limit) {
                const from = (filter.page - 1) * filter.limit;
                const to = from + filter.limit - 1;
                dataQuery = dataQuery.range(from, to);
            }
            const { count, data, error: dataError } = await dataQuery;
            err.value = dataError?.message;
            if (data) {
                res.value = append ? [...res.value, ...data] : data;
            }
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
        countTotal,
        load,
        loading,
    };
});
