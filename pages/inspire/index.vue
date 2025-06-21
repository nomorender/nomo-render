<template>
    <div class="min-h-screen w-full flex flex-col items-center">
        <NuxtImg format="webp" alt="PicHouse" src="/under-construction.jpg"
            class="w-[500px] object-cover object-center" />
        <div class="text-3xl font-bold tracking-wide mb-2">
            Oops! site is under construction
        </div>
        <div class="text-xl text-[#c8c7c7]">We're woring hard to improve your experience</div>
        <div class="text-xl text-[#c8c7c7]">Check back soon for updates!</div>
        <UButton id="go-homepage" icon="i-heroicons-arrow-right-solid" size="sm"
            class="mt-5 rounded-2xl px-4 py-3 max-w-[180px]" color="black" variant="solid" label="Back to Homepage"
            trailing @click="$router.push('/')" />
    </div>
</template>

<script>
definePageMeta({
    layout: false
})
</script>
