<script setup>
</script>


<template>
    <div class=" bg-[#FAF8F5] flex items-center justify-center">
        <div class="py-[45px] md:w-[1208px] lg:px-0 md:px-6 px-4">
            <div class="flex items-center">
                <nuxt-img alt="logo" src="/Logo3.svg"
                    class="lg:w-[190px] lg:h-[143px] md:w-[150px] md:h-[103px] w-[65px] h-[48px]" />
                <div class="flex flex-col items-start justify-center ml-5">
                    <div
                        class="lg:text-[32px] md:text-[25px] text-[15px] font-[700] text-left md:leading-[150%] leading-[180%] md:mb-4">
                        Nomadic Creativity, Timeless Render
                    </div>
                    <div class="lg:text-[25px] md:text-[22px] text-[12px] font-[400] italic text-left leading-[150%]">
                        More than just blueprints, it’s about storytelling
                    </div>
                </div>
            </div>
            <div class="md:mt-16 mt-10 flex flex-col gap-[40px] md:grid grid-cols-1 md:grid-cols-10 md:gap-16">
                <div class="col-span-4">
                    <div
                        class="text-[#8D7662] md:leading-[200%] leading-[100%] font-[600] lg:text-[25px] md:text-[22px] text-[18px] mb-2">
                        Location
                    </div>
                    <div>
                        <div
                            class="lg:text-[25px] md:text-[20px] text-[15px] font-[300] md:leading-[200%] leading-[180%] text-justify">
                            81 Huynh Thuc Khang, Thanh Pho Vinh, Nghe An, Viet Nam
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <div
                        class="text-[#8D7662] md:leading-[200%] leading-[100%] font-[600] lg:text-[25px] md:text-[22px] text-[18px] mb-2">
                        Contact
                    </div>
                    <div>
                        <div
                            class="lg:text-[25px] md:text-[20px] text-[15px] font-[300] md:leading-[200%] leading-[180%] text-justify">
                            Email: team@nomorender.com
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <div
                        class="text-[#8D7662] md:leading-[200%] leading-[100%] font-[600] lg:text-[25px] md:text-[22px] text-[18px] mb-2">
                        Social</div>
                    <div class="md:grid lg:grid-cols-4 md:grid-cols-3 md:gap-7 gap-3 flex">
                        <div class="flex items-center justify-center">
                            <NuxtLink to="https://www.behance.net/nomorender" target="_blank">
                                <nuxt-img alt="behance" src="/SocialMedia/Behance.svg"
                                    class="md:w-[56px] md:h-[58px] w-[31px] h-[31px]" />
                            </NuxtLink>
                        </div>
                        <div class="flex items-center justify-center">
                            <NuxtLink to="https://www.instagram.com/team.nomorender" target="_blank">
                                <nuxt-img alt="instagram" src="/SocialMedia/Instagram.svg"
                                    class="md:w-[56px] md:h-[58px] w-[31px] h-[31px]" />
                            </NuxtLink>
                        </div>

                        <div class="flex items-center justify-center">
                            <NuxtLink to="https://www.trustpilot.com/review/nomorender.com" target="_blank">
                                <nuxt-img alt="trust pilot" src="/SocialMedia/Trustpilot.svg"
                                    class="md:w-[56px] md:h-[58px] w-[31px] h-[31px]" />
                            </NuxtLink>
                        </div>

                        <div class="flex items-center justify-center">
                            <NuxtLink to="https://www.facebook.com/team.nomorender" target="_blank">
                                <nuxt-img alt="facebook" src="/SocialMedia/Facebook.svg"
                                    class="md:w-[56px] md:h-[58px] w-[31px] h-[31px]" />
                            </NuxtLink>
                        </div>

                        <div class="flex items-center justify-center">
                            <NuxtLink to="https://www.linkedin.com/company/nomorender/" target="_blank">
                                <nuxt-img alt="linkedin" src="/SocialMedia/Linkedin.svg"
                                    class="md:w-[56px] md:h-[58px] w-[31px] h-[31px]" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-span-4">
                    <div
                        class="text-[#8D7662] md:leading-[200%] leading-[100%] font-[600] lg:text-[25px] md:text-[22px] text-[18px] mb-2">
                        3D Rendering Services</div>
                    <div
                        class="lg:text-[25px] md:text-[20px] text-[15px] font-[300] md:leading-[200%] leading-[180%] text-justify">
                        <div>
                            <NuxtLink to="/interior" title="Explore our 3D interior rendering services">
                                3D Interior Rendering
                            </NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="/furniture" title="Explore our 3D furnitre rendering services">
                                3D Furniture Modeling
                            </NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="/exterior" title="Explore our 3D exterior rendering services">
                                3D Exterior Rendering
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-span-3">
                    <div
                        class="text-[#8D7662] md:leading-[200%] leading-[100%] font-[600] lg:text-[25px] md:text-[22px] text-[18px] mb-2">
                        Our Work</div>
                    <div
                        class="lg:text-[25px] md:text-[20px] text-[15px] font-[300] md:leading-[200%] leading-[180%] text-justify">
                        <div>
                            <NuxtLink to="/portfolio" title="Explore our portfolio">
                                Portfolio
                            </NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="/workflow" title="Explore our workflow">
                                Workflow
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-span-3">
                    <div
                        class="text-[#8D7662] md:leading-[200%] leading-[100%] font-[600] lg:text-[25px] md:text-[22px] text-[18px] mb-2">
                        Explore</div>
                    <div
                        class="lg:text-[25px] md:text-[20px] text-[15px] font-[300] md:leading-[200%] leading-[180%] text-justify">
                        <div>
                            <NuxtLink to="/inspire" title="Explore our inspire">
                                Inspire Space
                            </NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="/library" title="Explore our library">
                                Library
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>