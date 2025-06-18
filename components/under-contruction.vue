<template>
    <div class="min-h-screen w-full flex flex-col items-center my-auto">
        <NuxtImg format="webp" alt="PicHouse" src="/under-construction.jpg"
            class="w-[500px] object-cover object-center" />
        <div class="md:text-3xl text-xl font-bold tracking-wide mb-2">
            Oops! site is under construction
        </div>
        <div class="md:text-xl text-md text-[#c8c7c7]">We're woring hard to improve your experience</div>
        <div class="md:text-xl text-md text-[#c8c7c7]">Check back soon for updates!</div>
        <UButton icon="i-heroicons-arrow-right-solid" size="sm" class="mt-5 rounded-2xl md:px-4 md:py-3 max-w-[300px]"
            color="black" variant="solid" trailing @click="$router.push('/')">
            <span class="md:text-xl text-md">Back to homepage</span>
        </UButton>
    </div>
</template>