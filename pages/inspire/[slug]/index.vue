<script setup lang="ts">
import { useBlogStore } from '~/stores/blog/useBlog';
import { useBlogDetail } from '~/stores/blog/useBlogDetail';

const router = useRoute();
const { slug } = router.params;
const store = useBlogDetail();
const recommend = useBlogStore();
const notFound = ref(false);

onMounted(async () => {
    if (store.res?.slug !== slug || !store.res) {
        await store.load(slug as string);
    }
    if (store.res) {
        await recommend.load({
            tag: store.res.tag
        });
    } else {
        notFound.value = true;
    }
});

if (store.res) {
    useSeoMeta({
        title: () =>
            store.res?.title
                ? `${store.res.title} | Nomo Render Visualization`
                : 'Inspire of Nomo Render | Nomo Render Visualization',
        ogTitle: () =>
            store.res?.title
                ? `${store.res.title} | Nomo Render Visualization`
                : 'Inspire of Nomo Render | Nomo Render Visualization',
        description: () => store.res?.description ?? 'Nomo Render – 3D visualization studio',
        ogDescription: () => store.res?.description ?? 'Nomo Render – 3D visualization studio',
        ogUrl: () => `https://www.nomorender.com/inspire/${slug}`,
        ogImage: () => store.res?.cover_url,
        ogType: 'article',
        ogSiteName: 'Nomo Render',
        robots: 'index, follow',
    })
} else {
    notFound.value = true;
}
</script>

<template>
    <div class="flex flex-col items-center justify-center mt-20 text-justify lg:mb-10 mb-10">
        <div class="md:mb-[60px] mb-[25px]">
            <NuxtImg :src="store?.res?.cover_url" :alt="store.res?.title"
                class="lg:w-[1200px] lg:h-[480px] lg:max-w-[1200px] md:max-w-[700px] md:w-[700px] md:h-[300px] max-w-[320px] w-[320px] h-[180px] object-cover object-center" />
        </div>
        <div class="lg:max-w-[1200px] md:max-w-[700px] max-w-[350px] lg:text-[25px] text-[15px] leading-[150%] lg:leading-[200%] font-[300] !text-justify editor-content"
            v-html="store?.res?.content">
        </div>
    </div>
    <div class="flex flex-col lg:gap-[70px] md:gap-[50px] gap-[30px] items-center justify-center lg:mb-20 mb-10">
        <span
            class="lg:text-[25px] md:text-[19px] text-[15px] lg:leading-[200%] leading-[180%] font-[500] uppercase text-[#8d7662]">Other
            posts</span>
        <div v-for="blog in recommend.res.slice(0, 4)" :key="blog.id">
            <InspireRelatedBlog :id="blog.id" :slug="blog.slug" :tag="blog.tag" :title="blog.title"
                :description="blog.description" :created_at="blog.created_at" :cover_url="blog.cover_url"
                :content="blog.content" />
        </div>
    </div>
    <InspireContact />
    <InspireOtherService />
</template>