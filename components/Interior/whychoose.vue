<template>
    <div class="mt-[40px]">
        <div class="bg-[#D9D9D9] pb-[60px] pt-[50px]">
            <div class="flex flex-col items-center justify-center mb-[75px]">
                <div class="font-[400] text-[32px] leading-[150%]">Why choose Nomo Render for</div>
                <div class="leading-[150%] text-[#8D7662] text-[64px] font-[600]">Your Interior Rendering?</div>
            </div>
            <div class="flex gap-[10px] items-center justify-center">
                <div v-for="(item, index) in items" :key="index" class="bg-[#FAF8F5] p-[30px] rounded-[8px]">
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