<script setup lang="ts">
const pics = [
    { id: 1, src: '/aboutus/pic2.jpg', alt: 'picture of chair and table' },
    { id: 2, src: '/aboutus/pic3.jpg', alt: 'picture of long chair and picture' },
    { id: 3, src: '/aboutus/pic4.jpg', alt: 'picture of long chair and picture' }
]
</script>

<template>
    <div class="ld:mt-20 md:mt-[100px] mt-[110px]">
        <div class="flex flex-col items-center justify-center gap-3 mb-3">
            <span
                class="uppercase lg:text-[24px] md:text-[24px] text-[13px] leading-[150%] lg:tracking-[8px] md:tracking-[7px] tracking-[2px] font-[600]">meet
                nomo render studio</span>
            <h1
                class="lg:w-[600px] md:w-[600px] w-[200px] text-center font-qochy text-[#8D7662] lg:text-[64px] md:text-[48px] text-[24px] leading-[150%] font-[400]">
                Nomadic creativity timeless renders</h1>
        </div>

        <div class="flex flex-col items-center justify-center lg:gap-[50px] md:gap-[30px] gap-[20px]">
            <p
                class="leading-[200%] lg:text-[25px] md:text-[20px] text-[15px] text-center font-[300] lg:max-w-[1200px] md:max-w-[600px] max-w-[300px]">
                Hi, we are the creative minds behind stunning 3D visualizations that bring your ideas to life. Our name
                says a lot about us - <span class="font-[500]">“Nomo”</span> comes from “Nomad”, symbolizing boundless
                creativity, flexibility, and fresh perspectives. Meanwhile, <span class="font-[500]">“Render”</span> is
                what we do
                best, transforming
                concepts into crisp, high-quality visuals that tell a story.
            </p>

            <div
                class="lg:grid lg:grid-cols-3 md:flex flex flex-col gap-2 lg:max-w-[1440px] md:max-w-[600px] max-w-[300px]">
                <div v-for="(pic, index) in pics" :key="pic.id">
                    <NuxtImg :src="pic.src" :alt="pic.alt" class="lg:w-[480px] lg:h-[390px] w-full h-auto" :class="[
                        index === 0 ? 'lg:rounded-none rounded-tl-[5px] rounded-tr-[5px]' : '',
                        index === pics.length - 1 ? 'lg:rounded-none rounded-bl-[5px] rounded-br-[5px]' : ''
                    ]" />
                </div>
            </div>

            <div
                class="text-center font-angelface lg:max-w-[1200px] md:max-w-[600px] max-w-[300px] font-[400] lg:text-[64px] md:text-[34px] text-[24px] leading-[120%]">
                <span>
                    We don’t just follow trends, we explore, experiment, and craft unique designs that break away from
                    the ordinary.
                </span>
            </div>

            <div class="lg:flex md:hidden hidden gap-10 h-fit">
                <NuxtImg src="/aboutus/pic1.jpg" alt="picture about some chair and light on chair"
                    class="w-[670px] h-auto rounded-[8px]" />
                <div class="max-w-[480px] flex flex-col gap-3 font-[300] text-[25px] leading-[200%] text-justify">
                    <p>
                        With a passion for minimalist elegance, high-end aesthetics, and global adaptability, we work
                        with <span class="font-[500]">architects, designers, real estate developers, and brands</span>
                        looking for
                        powerful, engaging
                        visualizations. Whether you're bringing a space to life or pitching a groundbreaking project,
                        we're here to <span class="font-[500]">make your vision unforgettable.</span>
                    </p>
                    <p>
                        At Nomo Render, creativity knows no boundaries, and great design lasts forever.
                    </p>
                </div>
            </div>

            <div class="lg:hidden md:flex h-fit flex flex-col items-center justify-center gap-7">
                <div
                    class="md:max-w-[600px] max-w-[300px] flex flex-col gap-5 font-[300] md:text-[20px] text-[15px] leading-[180%] text-justify">
                    <p>
                        With a passion for minimalist elegance, high-end aesthetics, and global adaptability, we work
                        with <span class="font-[500]">architects, designers, real estate developers, and brands</span>
                        looking for
                        powerful, engaging
                        visualizations. Whether you're bringing a space to life or pitching a groundbreaking project,
                        we're here to <span class="font-[500]">make your vision unforgettable.</span>
                    </p>
                    <p>
                        At Nomo Render, creativity knows no boundaries, and great design lasts forever.
                    </p>
                    <NuxtImg src="/aboutus/pic1.png" alt="picture of some chair and light on chair"
                        class="w-full h-auto rounded-[5px]" />
                </div>
            </div>
        </div>
    </div>
</template>