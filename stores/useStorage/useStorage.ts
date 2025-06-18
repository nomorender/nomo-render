import type { FileObject } from '@supabase/storage-js';
import { defineStore } from 'pinia';

type FilterStorage = {
    page?: number;
    limit?: number;
};

export const useStorageStore = defineStore('storage', () => {
    const res = ref<FileObject[]>([]);
    const err = ref<string | null>(null);
    const countTotal = ref(0);
    const loading = ref<boolean>(true);
    const supabase = useSupabaseClient();

    const load = async (filter: FilterStorage = {}) => {
        try {
            loading.value = true;
            res.value = [];
            const { data, error } = await supabase
                .storage
                .from('project')
                .list('', {
                    limit: 1000,
                    offset: 0,
                });

            if (error) {
                err.value = error.message;
                return;
            }
            countTotal.value = data?.length ?? 0;
            const page = filter.page ?? 1;
            const limit = filter.limit ?? 10;
            const from = (page - 1) * limit;
            const to = from + limit;
            res.value = data?.slice(from, to) ?? [];
        } catch (error: any) {
            err.value = error.message ?? 'Unknown error';
        } finally {
            loading.value = false;
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
