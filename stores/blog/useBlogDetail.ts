import type { BlogDetail } from "~/types/inspire/blog-detail";

export const useBlogDetail = defineStore('blog-detail', () => {
    const res = ref<BlogDetail>();
    const err = ref();
    const loading = ref<boolean>(true);
    const supabase = useSupabaseClient();

    const load = async (slug: string) => {
        if (!loading.value) {
            loading.value = true;
        }
        const { data, error } = await supabase.from('blog').select('cover_url, content, created_at, slug, title, description').eq('slug', slug).limit(1);
        res.value = data?.[0]! as BlogDetail;
        loading.value = false;
        err.value = error;
    };
    return {
        res,
        err,
        load,
        loading,
    };
});
