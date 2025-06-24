<template>
    <div class="mt-[40px]">
        <div class="bg-[#D9D9D9] md:pb-[55px] md:pt-[50px] pb-[45px] pt-[40px]">
            <div
                class="flex flex-col items-center justify-center lg:mb-[75px] md:mb-[35px] mb-[12px] md:gap-0 gap-[5px]">
                <div class="font-[400] text-[16px] md:text-[32px] leading-[100%] md:leading-[150%]">Why choose Nomo
                    Render for</div>
                <div
                    class="md:w-full w-[321px] text-center leading-[130%] md:leading-[150%] text-[#8D7662] text-[30px] md:text-[64px] font-[600]">
                    Your
                    Interior
                    Rendering Service?</div>
            </div>
            <div class="hidden md:hidden lg:flex gap-[10px] items-center justify-center">
                <div v-for="(item, index) in items" :key="index"
                    class="bg-[#FAF8F5] px-[30px] pt-[35px] pb-[70px] rounded-[8px]">
                    <div class="flex flex-col items-center justify-center w-[330px]">
                        <div class="mb-[15px]">
                            <nuxt-img :src="item.logo" class="h-[100px] w-[100px]" />
                        </div>
                        <div class="font-[600] text-[25px] leading-[150%] text-[#8D7662] mb-[20px]">
                            {{ item.title }}
                        </div>
                        <div class="font-[300] text-[25px] leading-[200%] text-center">
                            {{ item.desc }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:hidden md:block block">
                <div class="relative pt-5">
                    <UCarousel :items="items" arrows :ui="{
                        item: 'basis-full flex justify-center items-center',
                        arrows: {
                            wrapper: 'flex items-center justify-center md:mt-10 mt-6 md:gap-[40px] gap-[15px] md:pb-10'
                        }
                    }" ref="carousel">
                        <template #default="{ item, index }">
                            <div :key="index"
                                class="bg-[#FAF8F5] py-9 px-6 md:py-20 md:w-[500px] lg:py-0 lg:px-0 rounded-[8px] flex justify-center items-center">
                                <div class="flex flex-col items-center justify-center ">
                                    <div class="md:mb-[35px] mb-[25px]">
                                        <nuxt-img :src="item.logo"
                                            class="h-[80px] w-[80px] md:h-[150px] md:w-[150px] lg:h-0 lg:w-0" />
                                    </div>
                                    <div
                                        class="font-[600] text-[18px] md:text-[30px] lg:text-0 leading-[100%] text-[#8D7662] md:mb-[30px] mb-[12px]">
                                        {{ item.title }}
                                    </div>
                                    <div
                                        class="md:w-[350px] w-[250px] font-[300] text-[15px] md:text-[20px] lg:text-0 leading-[180%] text-center">
                                        {{ item.desc }}
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template #prev="{ onClick, disabled }">
                            <UButton :disabled="disabled" id="watch-previous-project"
                                class="shadow-[0_4px_4px_rgba(0,0,0,0.25)] !ring-0 !focus:ring-0 !focus-visible:ring-0 rounded-full outline-none border-0 bg-[#FFFFFF] hover:bg-white text-[#8D7662] text-2xl p-2 md:h-[80px] md:w-[80px] h-[41px] w-[41px] flex items-center justify-center"
                                color="white" @click="onClick" square>
                                <UIcon name="mingcute:arrow-left-fill" class="md:size-10 size-5" />
                            </UButton>
                        </template>
                        <template #next="{ onClick, disabled }">
                            <UButton :disabled="disabled" id="watch-next-project"
                                class="shadow-[0_4px_4px_rgba(0,0,0,0.25)] !ring-0 !focus:ring-0 !focus-visible:ring-0 rounded-full outline-none border-0 bg-[#8D7662] disabled:text-[#8D7662] hover:bg-[#8D7662] text-[#FFFFFF] p-2 md:h-[80px] md:w-[80px] h-[41px] w-[41px] flex items-center justify-center"
                                color="white" @click="onClick" square>
                                <UIcon name="mingcute:arrow-right-fill" class="md:size-10 size-5" />
                            </UButton>
                        </template>
                    </UCarousel>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

const items = [
    {
        logo: '/Interior/Logo1.svg',
        title: 'High Quality & Flexible',
        desc: 'Our tailored approach ensures seamless customization, harmonizing design, color, and space to perfectly align with your vision.'
    },
    {
        logo: '/Interior/Logo2.svg',
        title: 'Fast Turnaround',
        desc: 'Our expert team, cutting-edge rendering, and streamlined workflow ensure high-quality visualizations on tight deadlines without compromising detail.'
    },
    {
        logo: '/Interior/Logo3.svg',
        title: 'Competitive Pricing',
        desc: 'We offer premium-quality interior rendering services at industry-leading rates, ensuring you receive exceptional value without exceeding your budget.'
    }
]

</script>