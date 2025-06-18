<template>
    <div class="md:my-20 my-10">
        <div :class="[color_background || 'bg-[#D9D9D9]']"
            class=" w-full flex flex-col justify-center items-center py-[40px] md:pb-[66px] md:pt-[55px]">
            <div class="flex flex-col justify-center items-center">
                <div class="md:text-[32px] text-[16px] leading-[100%] md:leading-[150%] font-[400]">{{ subheading }}
                </div>
                <div class="md:text-[64px] text-[30px] font-[600] leading-[100%] md:leading-[150%] text-[#8D7662]">
                    {{ heading }}</div>
            </div>
            <!-- Picture + text -->
            <div class="hidden mt-[70px] lg:flex flex-col justify-center items-center">
                <div v-for="(service, index) in props.services" :key="index"
                    :class="['md:flex gap-[4rem] w-full', index % 2 === 0 ? 'justify-start' : 'justify-end', index > 0 ? 'mt-20' : '']">
                    <div v-if="index % 2 === 0" class="w-[60%]">
                        <div class="flex justify-end">
                            <NuxtImg loading="lazy" format="webp" :src="service.image1"
                                class="w-[960px] h-[500px] object-cover" />
                        </div>
                    </div>

                    <div class="basis-[400px]">
                        <div class="text-[#8D7662] font-[600] text-[32px] leading-[150%]">{{ service.title }}</div>
                        <div class="text-[20px] font-[300] leading-[180%] text-justify mt-8"
                            v-html="service.description"></div>
                        <div class="mt-8">
                            <UButton :to="service.link"
                                class="hover:bg-[#D9D9D9] text-[#980C0C] ring-1 ring-[#980C0C] transition-all px-[20px] py-[10px] rounded-[8px]"
                                variant="outline" :trailing="false" color="red" icon="i-heroicons-arrow-right">
                                <div class="text-[18px] text-[#980C0C] leading-[16px] font-[500]">See more</div>
                            </UButton>
                        </div>
                    </div>

                    <div v-if="index % 2 !== 0" class="w-[60%]">
                        <div class="md:flex">
                            <NuxtImg loading="lazy" format="webp" :src="service.image1"
                                class="w-[450px] h-[500px]  aspect-square object-cover" />
                            <NuxtImg loading="lazy" format="webp" :src="service.image2"
                                class="w-[500px] h-[500px]  aspect-[3/4] object-cover" />
                        </div>
                    </div>
                </div>
            </div>


            <div class="lg:hidden flex flex-col mt-[20px]">
                <div v-for="(service, index) in props.services" :key="'mobile-' + index" class="mt-[35px] first:mt-0">
                    <div class="mx-[13px]">
                        <div class="flex justify-end">
                            <NuxtImg loading="lazy" format="webp" :src="service.image1"
                                class="w-full md:h-[600px] lg:h-[300px] h-[300px] object-cover rounded-[8px]" />
                        </div>
                    </div>
                    <div class="basis-[400px] mx-[30px] mt-[20px]">
                        <div
                            class="text-[#8D7662] font-[600] md:text-[27px] lg:text-[18px] text-[18px] leading-[100%] uppercase">
                            {{ service.title
                            }}
                        </div>
                        <div class="md:text-[20px] lg:text-[15px] text-[15px] font-[300] leading-[180%] text-justify mt-[15px]"
                            v-html="service.description"></div>
                        <div class="mt-[20px] flex justify-center">
                            <UButton :to="service.link"
                                class="hover:bg-[#D9D9D9] text-[#980C0C] ring-1 ring-[#980C0C] transition-all md:px-[20px] lg:px-[12px] px-[12px] py-[6px] md:py-[12px] lg:py-[6px] rounded-[5px]"
                                variant="outline" :trailing="false" color="red">
                                <Icon name="i-heroicons-arrow-right" class="text-[#980C0C]" />
                                <div
                                    class="md:text-[20px] lg:text-[13px] text-[13px] text-[#980C0C] leading-[16px] font-[400]">
                                    See more</div>
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    subheading?: string
    heading?: string
    services: {
        title: string
        description: string
        image1: string
        image2?: string,
        link: string
    }[]
    color_background?: string,
}>()
</script>
