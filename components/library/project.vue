<script setup lang="ts">
import type { Library } from '~/types/library/library';

const props = defineProps<Library>()

const confirmOpen = ref(false)

const handleDownload = () => {
    confirmOpen.value = true
}

const reallyDownload = (url: string) => {
    window.open(url, '_blank', 'noopener')
}
</script>

<template>
    <div>
        <div
            class="lg:w-[1000px] md:w-[500px] md:max-w-[500px] lg:max-w-[1000px] max-w-[350px] w-[350px] flex flex-col">
            <div>
                <NuxtImg :src="props.cover_url"
                    class="rounded-tl-[5px] rounded-tr-[5px] w-full lg:h-[360px] h-[200px] object-center object-cover" />
            </div>
            <div
                class="flex flex-col gap-[25px] bg-[#faf8f6] lg:p-10 p-5 border border-[#D8C3A5] border-t-0 rounded-bl-[5px] rounded-br-[5px]">
                <div class="flex flex-col lg:gap-[10px] gap-[15px] lg:max-w-[1000px] md:max-w-[500px] max-w-[260px]">
                    <h1 class="font-[500] lg:text-[25px] md:text-[25px] lg:leading-[200%] leading-[180%] text-[15px]">{{
                        props.title }}
                    </h1>
                    <p class="lg:text-[20px] md:text-[18px] text-[13px] leading-[150%] italic font-[300]">{{
                        props.description }}</p>
                </div>
                <div>
                    <UButton @click="handleDownload" id="read-blog-inspire"
                        aria-label="Click here to see more service of Nomorender" class=" hover:bg-[#D9D9D9] text-[#980C0C] ring-1 ring-[#980C0C] transition-all md:px-[18px]
                        lg:px-[20px] px-[12px] py-[6px] md:py-[12px] lg:py-[13px] rounded-[8px]" variant="outline"
                        :trailing="false" color="red">
                        <Icon name="i-heroicons-arrow-right" class="text-[#980C0C]" />
                        <span
                            class="md:text-[15px] lg:text-[18px] text-[13px] text-[#980C0C] leading-[16px] lg:font-[500] font-[400]">
                            Download now</span>
                    </UButton>
                </div>
            </div>
        </div>
    </div>

    <DownloadModal v-model="confirmOpen" @confirm="reallyDownload(props.link_download)" />
</template>