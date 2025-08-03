<script setup lang="ts">
const social = [
    {
        id: 1,
        icon: '/contact/email.svg',
        content: `<span class="font-[500]">Email: </span>team@nomorender.com`,
        link: ``
    },
    {
        id: 3,
        icon: '/contact/instagram.svg',
        content: `<span class="font-[500]">Instagram: </span>@team.nomorender`,
        link: 'https://www.instagram.com/team.nomorender'
    },
    {
        id: 4,
        icon: '/contact/benance.svg',
        content: `<span class="font-[500]">Behance: </span>behance.net/nomorender`,
        link: 'https://www.behance.net/nomorender'
    }
]
</script>

<template>
    <div
        class="flex flex-col lg:gap-[50px] md:gap-[40px] gap-[30px] items-center justify-center lg:mt-[120px] md:mt-[100px] mt-[110px]">
        <div class="flex flex-col items-center justify-center gap-3">
            <span
                class="uppercase lg:text-[24px] md:text-[24px] text-[13px] leading-[150%] lg:tracking-[8px] md:tracking-[7px] tracking-[2px] font-[600]">we're
                here to help
                you</span>
            <h1 class="font-qochy text-[#8D7662] lg:text-[48px] md:text-[48px] text-[24px] leading-[150%] font-[400]">
                Let’s bring
                your vision
                to
                life!</h1>
        </div>

        <div class="lg:max-w-[1200px] md:max-w-[700px] max-w-[320px]">
            <p class="font-[300] lg:text-[25px] md:text-[25px] text-[15px] leading-[200%] text-center">
                Have a project in mind? Whether you need stunning 3D renderings, detailed architectural visuals, or
                custom design solutions, we’re here to help. Contact us, and let’s discuss how we can transform your
                ideas into reality.
            </p>
        </div>

        <div class="max-w-[315px] lg:hidden md:hidden block">
            <NuxtImg src="/contact/contact_form.jpg" class="w-full h-full object-cover rounded-[8px]" />
        </div>
        <div>
            <div class="flex flex-col space-y-6">
                <div v-for="(item) in social" :key="item.id" class="lg:gap-[20px] md:gap-[20px] ">
                    <div
                        class="flex gap-[20px] lg:text-[25px] md:text-[25px] text-[15px] leading-[180%] font-[300] lg:leading-[200%]">
                        <NuxtLink :to="item.link" aria-label="go to social media of nomo render" target="_blank">
                            <nuxt-img :src="item.icon" alt="icon-social"
                                class="lg:w-[50px] lg:h-[50px] py-1 md:w-[50px] md:h-[50px] w-[30px] h-[30px]" />
                        </NuxtLink>
                        <div v-html="item.content"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <contact-formcontact />
        </div>
    </div>
</template>