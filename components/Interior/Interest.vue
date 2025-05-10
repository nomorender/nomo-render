<template>
    <div class="my-20">
        <div class="pt-[60px] pb-[70px] bg-[#FAF8F5]">
            <div class="flex flex-col items-center justify-center">
                <div
                    class="md:text-[32px] text-[16px] font-normal md:leading-[150%] leading-[100%] md:tracking-[2%] mb-[5px]">
                    You may interest!
                </div>
                <div
                    class="md:w-full w-[306px] text-center text-[#8D7662] md:leading-[50px] font-semibold leading-[100%] md:text-[64px] text-[30px] md:tracking-[2%]">
                    Types of 3D Interior Visualization
                </div>
            </div>

            <div class="flex flex-col items-center justify-center my-5">
                <div
                    class="pl-0 w-[1200px] md:text-[32px] text-[15px] md:leading-[150%] leading-[180%] font-light mx-[35px] md:mt-[70px] md:mb-[18px] text-justify">
                    <div class="text-center">
                        3D interior visualization bridges the gap between <span class="font-[600] italic">concept and
                            reality</span>, making it easier for
                        designers and clients to <span class="font-[600] italic">visualize layouts, materials, and
                            lighting</span>. Different rendering styles
                        offer flexibility to suit any projects.
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center mt-[40px]">
                <div class="w-[1200px] flex flex-col gap-[50px]">
                    <div class="flex flex-col gap-[50px]">
                        <div
                            class="bg-[#FFFFFF] w-full flex items-center rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                            <div class="border-[3px] rounded-[8px] border-[#D8C3A5]">
                                <div
                                    class="text-[#8D7662] text-center w-[336px] py-[37px] px-[71px] text-[32px] font-[600] leading-[150%]">
                                    Photorealistic
                                    Still Renders
                                </div>
                            </div>

                            <div class="font-[300] text-[25px] leading-[200%] text-justify mx-[50px]">
                                High-quality, lifelike images that showcase interior spaces with realistic lighting,
                                textures, and materials. Perfect for presentations, marketing, and client approvals.
                            </div>
                        </div>

                        <div class="flex gap-[8px]">
                            <div>
                                <NuxtImg src="/Interior/Pic1.jpg"
                                    class="h-[360px] object-cover object-center rounded-[8px]" />
                            </div>
                            <div>
                                <NuxtImg src="/Interior/Pic2.jpg"
                                    class="h-[360px] object-cover object-center rounded-[8px]" />
                            </div>
                            <div>
                                <NuxtImg src="/Interior/Pic3.jpg"
                                    class="h-[360px] w-[400px] object-cover object-center rounded-[8px]" />
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-[50px]">
                        <div
                            class="bg-[#FFFFFF] w-full flex items-center rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                            <div class="border-[3px] rounded-[8px] border-[#D8C3A5]">
                                <div
                                    class="text-[#8D7662] text-center w-[336px] py-[37px] px-[71px] text-[32px] font-[600] leading-[150%]">
                                    360°
                                    <br />Interior Tour
                                </div>
                            </div>

                            <div class="font-[300] text-[25px] leading-[200%] text-justify mx-[50px]">
                                A panoramic visualization to explore an interior space from every angle. This provides a
                                true sense of depth, scale and ambiance, allowing clients to navigate through the room.
                            </div>
                        </div>

                        <div class="flex gap-[8px]">
                            <div>
                                <NuxtImg src="/Interior/Pic4.png"
                                    class="h-[360px] object-cover object-center rounded-[8px]" />
                            </div>
                            <div>
                                <NuxtImg src="/Interior/Pic5.png"
                                    class="h-[360px] object-cover object-center rounded-[8px]" />
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col gap-[50px]">
                        <div
                            class="bg-[#FFFFFF] w-full flex items-center rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                            <div class="border-[3px] rounded-[8px] border-[#D8C3A5]">
                                <div
                                    class="text-[#8D7662] text-center w-[336px] py-[37px] px-[71px] text-[32px] font-[600] leading-[150%]">
                                    Camera
                                    Walkthrough
                                </div>
                            </div>

                            <div class="font-[300] text-[25px] leading-[200%] text-justify mx-[50px]">
                                Cinematic videos guide viewers through interior space with smooth, natural movement. It highlights flow, spatial transitions and details to match the design vision.
                            </div>
                        </div>

                        <div class="">
                            <div class="flex gap-[8px]">
                                <div>
                                    <NuxtImg src="/Interior/Pic8.png"
                                        class="w-[298px] h-[360px] object-cover object-center rounded-[8px]" />
                                </div>
                                <div>
                                    <NuxtImg src="/Interior/Pic7.png"
                                        class="h-[360px] w-[400px] object-cover object-center rounded-[8px]" />
                                </div>
                                <div>
                                    <NuxtImg src="/Interior/Pic6.png"
                                        class="h-[360px] w-[485px] object-cover object-center rounded-[8px]" />
                                </div>
                            </div>
                            <video controls class="rounded-[8px] h-[675px] mt-[8px]">
                                <source src="/Interior/Video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>