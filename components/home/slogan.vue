<script setup lang="ts">
import { useSlogan } from '~/stores/homepage/useSlogan'

const sloganStore = useSlogan()

onMounted(async () => {
    if (!sloganStore.slogan) {
        await sloganStore.load()
    }
})
</script>

<template>
    <div class="flex justify-center items-center flex-col md:py-[6rem] py-[40px] text-center bg-[#FAF8F5]">
        <template v-if="sloganStore.loading">
            <USkeleton class="md:w-[254px] md:h-[188px] w-[100px] h-[74px] mb-5 md:mb-7 rounded-lg" />
            <USkeleton class="h-6 md:h-10 w-3/4 mb-3 md:mb-5" />
            <USkeleton class="h-4 md:h-8 w-2/3" />
        </template>

        <template v-else>
            <nuxt-img alt="Logo" :src="sloganStore.slogan?.img"
                class="md:w-[254px] md:h-[188px] w-[100px] h-[74px] mb-5 md:mb-7" />
            <h2 class="font-semibold md:text-[40px] text-[18px] mb-2 md:mb-4">
                {{ sloganStore.slogan?.slogan }}
            </h2>
            <p class="italic md:text-[32px] text-[14px] font-[400] leading-[150%]">
                {{ sloganStore.slogan?.sub_slogan }}
            </p>
        </template>
    </div>
</template>
