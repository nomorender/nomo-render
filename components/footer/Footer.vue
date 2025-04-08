<script setup>
const firstListItem = [
    {
        name: "Location",
        body: `<p class="text-justify leading-[180%]">US, New York NY 10016, 347 5th Ave Suite 1402-374 Portugal, Lisbon, Cidade de Cardiff 1, 5D</p>`,
    },
    {
        name: "Contact",
        body: `<div class="text-justify leading-[180%]">Email: team@nomorender.com<br/>WhatsApp: +84866943407</div>`,
    },
]

const secondListItem = [
    {
        name: "3D Rendering Services",
        body: `
      <div class="text-justify leading-[180%]"><p>3D Exterior Rendering</p>
      <p>3D Interior Rendering</p>
      <p>3D Furniture Modeling Rendering</p></div>
    `,
    },
    {
        name: "Our Work",
        body: `
      <p>Portfolio</p>
      <p>Workflow</p>
    `,
    },
    {
        name: "Explore",
        body: `
      <p>Inspire Space</p>
      <p>Library</p>
    `,
    },
]
</script>


<template>
    <div class="flex items-center justify-center bg-[#FAF8F5]">
        <div class=" py-16 md:w-[1210px] md:px-0 px-5">
            <div class="flex items-center">
                <NuxtImg src="/logo.png" class="md:w-[190px] md:h-[143px] w-[65px] h-[49px]" />
                <div class="flex flex-col items-start justify-center ml-5">
                    <div class="md:text-[32px] text-[15px] font-[700] text-left leading-[150%]">
                        Nomadic Creativity, Timeless Render
                    </div>
                    <div class="md:text-[25px] text-[12px] font-[400] italic text-left leading-[150%]">
                        More than just blueprints, it’s about storytelling
                    </div>
                </div>
            </div>
            <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16">
                <div v-for="(item, index) in firstListItem" :key="index" class="max-w-xs">
                    <div class="text-[#8D7662] font-semibold text-xl mb-5">
                        {{ item.name }}
                    </div>
                    <div class="text-lg font-[300] w-fit" v-html="item.body"></div>
                </div>
                <div class="w-fit">
                    <div class="text-[#8D7662] font-[600] text-xl mb-5">Social</div>
                    <div class="grid grid-cols-4 gap-5">
                        <nuxt-img src="/SocialMedia/Behance.svg" class="w-[56px] h-[58px]" />
                        <nuxt-img src="/SocialMedia/Instagram.svg" class="w-[56px] h-[58px]" />
                        <nuxt-img src="/SocialMedia/whatsApp.svg" class="w-[56px] h-[58px]" />
                        <nuxt-img src="/SocialMedia/Trustpilot.svg" class="w-[56px] h-[58px]" />
                        <nuxt-img src="/SocialMedia/Facebook.svg" class="w-[56px] h-[58px]" />
                        <nuxt-img src="/SocialMedia/Linkedin.svg" class="w-[56px] h-[58px]" />
                    </div>
                </div>

                <div v-for="(item, index) in secondListItem" :key="index" class="max-w-xs">
                    <div class="text-[#8D7662] font-semibold text-xl mb-5">
                        {{ item.name }}
                    </div>
                    <div class="text-lg font-[300] w-fit" v-html="item.body"></div>
                </div>
            </div>
        </div>
    </div>
</template>