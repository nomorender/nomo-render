<script setup lang="ts">
import type { Blog } from '~/types/inspire/blog';

const props = defineProps<Blog>()
const date = formatDate(props.created_at)
</script>

<template>
    <div>
        <div class="lg:w-[530px] lg:max-w-[530px] max-w-[350px] w-[350px] flex flex-col">
            <div id="see-detail-inspire-project">
                <NuxtLink :to="`/inspire/${props.slug}`" aria-label="Go to detail">
                    <NuxtImg id="see-detail-inspire-project" :src="props.cover_url" :alt="props.title"
                        class="rounded-tl-[5px] rounded-tr-[5px] w-full lg:h-[360px] h-[200px] object-center object-cover" />
                </NuxtLink>
            </div>
            <div
                class="flex flex-col gap-[25px] bg-[#faf8f6] lg:p-10 p-5 border border-[#D8C3A5] border-t-0 rounded-bl-[5px] rounded-br-[5px]">
                <div class="flex flex-col lg:gap-[10px] gap-[15px] lg:max-w-[530px] md:max-w-[350px] max-w-[260px]">
                    <div
                        class="lg:text-[20px] text-[13px] lg:leading-[150%] leading-[100%] font-[400] flex items-center">
                        <span>
                            {{ date }} | <span class="uppercase">{{ props.tag }}</span>
                        </span>
                    </div>
                    <h1 class="font-[500] lg:text-[25px] lg:leading-[200%] leading-[180%] text-[15px]">{{ props.title }}
                    </h1>
                    <p class="lg:text-[20px] text-[13px] leading-[150%] italic font-[300]">{{ props.description }}</p>
                </div>
                <div>
                    <UButton id="read-blog-inspire" aria-label="Click to see detail blog inspire"
                        :to="`/inspire/${props.slug}`" class=" hover:bg-[#D9D9D9] text-[#980C0C] ring-1 ring-[#980C0C] transition-all md:px-[18px]
                        lg:px-[20px] px-[12px] py-[6px] md:py-[8px] lg:py-[13px] rounded-[8px]" variant="outline"
                        :trailing="false" color="red">
                        <Icon name="i-heroicons-arrow-right" class="text-[#980C0C]" aria-hidden="true" />
                        <span :id="'read-blog-inspire-' + props.id" aria-label="Click to see detail blog inspire"
                            class="md:text-[13px] lg:text-[18px] text-[13px] text-[#980C0C] leading-[16px] font-[500]">
                            Read more</span>
                        <span id="read-blog-inspire" class="sr-only">Read more: {{ props.title }}</span>
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>