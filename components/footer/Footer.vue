<script setup>
const firstListItem = [
    {
        name: "Location",
        body: `<p class="text-justify">US, New York NY 10016, 347 5th Ave Suite 1402-374<br/>Portugal, Lisbon, Cidade de Cardiff 1, 5D</p>`,
    },
    {
        name: "Contact",
        body: `<div>Email: team@nomorender.com<br/>WhatsApp: +84866943407</div>`,
    },
]

const secondListItem = [
    {
        name: "3D Rendering Services",
        body: `
      <p>3D Exterior Rendering</p>
      <p>3D Interior Rendering</p>
      <p>3D Furniture Modeling Rendering</p>
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
    <div class="bg-[#FAF8F5] md:px-[130px] px-5 py-16">
        <div class="flex items-center">
            <NuxtImg src="/logo.png" class="md:w-[190px] md:h-[143px] w-24 h-16" />
            <div class="flex flex-col items-start justify-center ml-5">
                <div class="md:text-[32px] text-[17px] font-semibold text-left leading-[150%]">
                    Nomadic Creativity, Timeless Render
                </div>
                <div class="md:text-[25px] text-[15px] font-thin italic text-left leading-[150%]">
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
                    <nuxt-img src="/SocialMedia/whatsapp.svg" class="w-[56px] h-[58px]" />
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
</template>