<template>
    <div class="min-h-screen">
        <div class="flex flex-col text-center w-full p-8">
            <span class="sm:text-xl text-xs my-6">
                The page you're looking for doesn't seem to exist
            </span>
            <UButton id="go-homepage" icon="i-heroicons-arrow-right-solid" size="sm"
                class="rounded-2xl px-4 py-3 max-w-[170px] mx-auto" color="primary" variant="solid"
                label="Go to Homepage" trailing @click="$router.push('/')" />
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: `Page not found | Nomo Render`,
    meta: [{ name: 'description', content: `The page you're looking for doesn't seem to exist` }],
});
definePageMeta({
    layout: false
})

</script>
