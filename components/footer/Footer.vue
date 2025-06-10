<script setup>
</script>


<template>
    <div class=" bg-[#FAF8F5] flex items-center justify-center">
        <div class="py-[45px] md:w-[1208px] md:px-0 px-4">
            <div class="flex items-center">
                <nuxt-img alt="logo" src="/Logo3.svg" class="md:w-[190px] md:h-[143px] w-[65px] h-[48px]" />
                <div class="flex flex-col items-start justify-center ml-5">
                    <div
                        class="md:text-[32px] text-[15px] font-[700] text-left md:leading-[150%] leading-[180%] md:mb-4">
                        Nomadic Creativity, Timeless Render
                    </div>
                    <div class="md:text-[25px] text-[12px] font-[400] italic text-left leading-[150%]">
                        More than just blueprints, it’s about storytelling
                    </div>
                </div>
            </div>
            <div class="md:mt-16 mt-10 flex flex-col gap-[40px] md:grid grid-cols-1 md:grid-cols-10 md:gap-16">
                <div class="col-span-4">
                    <div
                        class="text-[#8D7662] md:leading-[200%] leading-[100%] font-[600] md:text-[25px] text-[18px] mb-2">
                        Location
                    </div>
                    <div>
                        <div
                            class="md:text-[25px] text-[15px] font-[300] md:leading-[200%] leading-[180%] text-justify">
                            81 Huynh Thuc Khang, Thanh Pho Vinh, Nghe An, Viet Nam
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <div
                        class="text-[#8D7662] md:leading-[200%] leading-[100%] font-[600] md:text-[25px] text-[18px] mb-2">
                        Contact
                    </div>
                    <div>
                        <div
                            class="md:text-[25px] text-[15px] font-[300] md:leading-[200%] leading-[180%] text-justify">
                            Email: team@nomorender.com<br />
                            WhatsApp: +84967563407
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <div
                        class="text-[#8D7662] md:leading-[200%] leading-[100%] font-[600] md:text-[25px] text-[18px] mb-2">
                        Social</div>
                    <div class="md:grid grid-cols-4 md:gap-7 gap-3 flex">
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
                            <NuxtLink to="https://wa.me/84967563407" target="_blank">
                                <nuxt-img alt="whatsapp" src="/SocialMedia/whatsApp.svg"
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
                        class="text-[#8D7662] md:leading-[200%] leading-[100%] font-[600] md:text-[25px] text-[18px] mb-2">
                        3D Rendering Services</div>
                    <div class="md:text-[25px] text-[15px] font-[300] md:leading-[200%] leading-[180%] text-justify">
                        <div>
                            <NuxtLink to="/exterior">
                                3D Exterior Rendering
                            </NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="/interior">
                                3D Interior Rendering
                            </NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="/furniture">
                                3D Furniture Modeling Rendering
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-span-3">
                    <div
                        class="text-[#8D7662] md:leading-[200%] leading-[100%] font-[600] md:text-[25px] text-[18px] mb-2">
                        Our Work</div>
                    <div class="md:text-[25px] text-[15px] font-[300] md:leading-[200%] leading-[180%] text-justify">
                        <div>
                            <NuxtLink to="/">
                                Portfolio
                            </NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="">
                                Workflow
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-span-3">
                    <div
                        class="text-[#8D7662] md:leading-[200%] leading-[100%] font-[600] md:text-[25px] text-[18px] mb-2">
                        Explore</div>
                    <div class="md:text-[25px] text-[15px] font-[300] md:leading-[200%] leading-[180%] text-justify">
                        <div>
                            <NuxtLink to="/">
                                Inspire Space
                            </NuxtLink>
                        </div>
                        <div>
                            <NuxtLink to="">
                                Library
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>