<script setup lang="ts">
import { ViewArround } from '#components';

</script>

<template>
    <div class="lg:my-20">
        <div class="lg:pt-[60px] lg:pb-[60px] pb-[45px] pt-[40px] bg-[#FAF8F5]">
            <div class="flex flex-col items-center justify-center">
                <div
                    class="lg:text-[32px] md:text-[25px] text-[16px] font-normal lg:leading-[150%] leading-[100%] lg:tracking-[2%] mb-[5px]">
                    You may interest!
                </div>
                <div
                    class="lg:w-full md:w-[600px] w-[306px] text-center text-[#8D7662] lg:leading-[50px] font-semibold leading-[130%] lg:text-[64px] md:text-[50px] text-[30px] lg:tracking-[2%]">
                    Types of 3D Interior Visualization
                </div>
            </div>

            <div class="flex flex-col items-center justify-center my-5">
                <div
                    class="pl-0 lg:w-[1200px] md:w-full md:max-w-[650px] w-[303px] lg:text-[32px] md:text-[28px] text-[18px] lg:leading-[150%] leading-[180%] font-light mx-[35px] lg:mt-[70px] lg:mb-[18px] text-justify">
                    <div class="text-center md:text-justify">
                        3D interior visualization bridges the gap between <span class="font-[600] italic">concept and
                            reality</span>, making it easier for
                        designers and clients to <span class="font-[600] italic">visualize layouts, materials, and
                            lighting</span>. Different rendering styles
                        offer flexibility to suit any projects.
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center mt-[40px]">
                <div class="lg:w-[1200px] flex flex-col gap-[30px] lg:gap-[50px]">
                    <div class="flex flex-col lg:gap-[50px] items-center justify-center">
                        <div
                            class="bg-[#FFFFFF] w-[303px] md:w-[700px] md:max-w-[700px] lg:w-full lg:flex items-center lg:rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                            <div class="border-[3px] rounded-[8px] border-[#D8C3A5] py-[16px] lg:py-0">
                                <div
                                    class="text-[#8D7662] text-center lg:w-[336px] md:w-full lg:py-[37px] lg:px-[71px] lg:text-[32px] md:text-[32px] text-[18px] font-[600] leading-[150%]">
                                    Photorealistic
                                    Still Renders
                                </div>
                            </div>

                            <div
                                class="font-[300] text-[15px] lg:text-[25px] md:text-[25px] lg:leading-[200%] leading-[180%] mx-[30px] lg:my-[10px] my-[30px] text-justify lg:mx-[50px]">
                                High-quality, lifelike images that showcase interior spaces with realistic lighting,
                                textures, and materials. Perfect for presentations, marketing, and client approvals.
                            </div>
                        </div>
                        <div class="flex lg:gap-[8px]">
                            <div class="hidden lg:block">
                                <NuxtImg format="webp" src="/Interior/Pic1.jpg" alt="pic1" loading="lazy"
                                    class="h-[360px] object-cover object-center rounded-[8px]" />
                            </div>
                            <div>
                                <NuxtImg format="webp" src="/Interior/Pic2.jpg" alt="pic2" loading="lazy"
                                    class="lg:h-[360px] md:h-[460px] h-[180px] w-[303px] lg:w-full md:w-[700px] md:max-w-[700px] object-cover object-center rounded-[8px]" />
                            </div>
                            <div class="hidden lg:block">
                                <NuxtImg format="webp" src="/Interior/Pic3.jpg" alt="pic3" loading="lazy"
                                    class="h-[360px] w-[400px] object-cover object-center rounded-[8px]" />
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col lg:gap-[50px] items-center justify-center">
                        <div
                            class="bg-[#FFFFFF] w-[303px] md:w-[700px] md:max-w-[700px] lg:w-full lg:flex items-center lg:rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                            <div class="border-[3px] rounded-[8px] border-[#D8C3A5] py-[16px] lg:py-0">
                                <div
                                    class="text-[#8D7662] hidden lg:block text-center lg:w-[336px] md:w-full lg:py-[37px] lg:px-[71px] lg:text-[32px] md:text-[32px] text-[18px] font-[600] leading-[150%]">
                                    360°
                                    <br />Interior Tour
                                </div>
                                <div
                                    class="text-[#8D7662] lg:hidden block text-center lg:w-[336px] md:w-full lg:py-[37px] lg:px-[71px] lg:text-[32px] md:text-[32px] text-[18px] font-[600] leading-[150%]">
                                    360° Interior Tour
                                </div>
                            </div>
                            <div
                                class="font-[300] text-[15px] lg:text-[25px] md:text-[25px] lg:leading-[200%] leading-[180%] mx-[30px] lg:my-[10px] my-[30px] text-justify lg:mx-[50px]">
                                A panoramic visualization to explore an interior space from every angle. This
                                provides a
                                true sense of depth, scale and ambiance, allowing clients to navigate through
                                the room.
                            </div>
                        </div>

                        <div class="flex lg:gap-[8px]">
                            <ViewArround />
                        </div>
                    </div>

                    <div class="flex flex-col lg:gap-[50px] items-center justify-center lg:mt-0 md:mt-0 ">
                        <div
                            class="bg-[#FFFFFF] w-[303px] md:w-[700px] md:max-w-[700px] lg:w-full lg:flex items-center lg:rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                            <div class="border-[3px] rounded-[8px] border-[#D8C3A5] py-[16px] lg:py-0">
                                <div
                                    class="text-[#8D7662] text-center lg:w-[336px] md:w-full lg:py-[37px] lg:px-[71px] lg:text-[32px] md:text-[32px] text-[18px] font-[600] leading-[150%]">
                                    Camera
                                    Walkthrough
                                </div>
                            </div>
                            <div
                                class="font-[300] text-[15px] lg:text-[25px] md:text-[25px] lg:leading-[200%] leading-[180%] mx-[30px] lg:my-[10px] my-[30px] text-justify lg:mx-[50px]">
                                Cinematic videos guide viewers through interior space with smooth, natural movement.
                                It
                                highlights flow, spatial transitions and details to match the design vision.
                            </div>
                        </div>

                        <div class="lg:gap-[8px] hidden lg:flex">
                            <div class="hidden lg:block">
                                <NuxtImg format="webp" src="/Interior/Pic8.png" alt="pic8" loading="lazy"
                                    class="w-[298px] h-[360px] object-cover object-center rounded-[8px]" />
                            </div>
                            <div>
                                <NuxtImg format="webp" src="/Interior/Pic7.png" alt="pic7" loading="lazy"
                                    class="lg:h-[360px] h-[180px] w-[303px] lg:w-full object-cover object-center rounded-[8px]" />
                            </div>
                            <div class="hidden lg:block">
                                <NuxtImg format="webp" src="/Interior/Pic6.png" alt="pic6" loading="lazy"
                                    class="h-[360px] w-[485px] object-cover object-center rounded-[8px]" />
                            </div>
                        </div>
                        <video autoplay loop muted controls playsinline
                            class="rounded-[8px] lg:h-[675px] md:w-[700px] md:max-w-[700px] w-[303px] lg:w-full pointer-events-none">
                            <source src="/Interior/Video.mp4" alt="video showcase bathroom in 3D" type="video/mp4" />
                        </video>
                        <div
                            class="lg:w-full w-[303px] md:w-[700px] md:max-w-[700px] font-[300] text-[15px] md:text-[25px] lg:text-[25px] leading-[180%] lg:leading-[200%] lg:text-center text-justify mt-[40px] lg:mt-[15px]">
                            No matter the scale of your project, 3D interior visualization ensures <span
                                class="font-[500]">every
                                element is
                                thoughtfully presented</span>. From concept to completion, these techniques help
                            accurately
                            <span class="font-[500]">turn imagination into reality.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>